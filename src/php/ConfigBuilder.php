<?php

declare(strict_types=1);

namespace GSU\EmbeddedHelp;

final class ConfigBuilder
{
    /**
     * @return void
     */
    public static function main(): void
    {
        $confDir = __DIR__ . '/../../conf';
        $inst = new self(
            anchorElementSelectors: "{$confDir}/AnchorElementSelectors.csv",
            supportItems: "{$confDir}/SupportItems.csv",
            categoryItems: "{$confDir}/CategoryItems.csv",
            categoryPages: "{$confDir}/CategoryPages.csv",
            configTemplate: "{$confDir}/config.template.js",
        );

        echo $inst->__invoke();
    }


    /**
     * @param string $anchorElementSelectors
     * @param string $supportItems
     * @param string $categoryItems
     * @param string $categoryPages
     * @param string $configTemplate
     */
    public function __construct(
        private string $anchorElementSelectors,
        private string $supportItems,
        private string $categoryItems,
        private string $categoryPages,
        private string $configTemplate
    ) {
    }


    /**
     * @return string
     */
    public function __invoke(): string
    {
        $template = $this->getConfigTemplate();
        $config = [
            'ANCHOR_ELEMENT_SELECTORS' => $this->getAnchorElementSelectors(),
            'SUPPORT_ITEMS' => $this->getSupportItems(),
            'HELP_ITEM_CATEGORIES' => $this->getHelpItemCategories()
        ];

        return str_replace(
            array_keys($config),
            array_values($config),
            $template
        );
    }


    /**
     * @return string
     */
    public function getAnchorElementSelectors(): string
    {
        $outputBuffer = [];

        $f = fopen($this->anchorElementSelectors, 'r');
        if (!is_resource($f)) {
            throw new \RuntimeException("Unable to open anchor element selectors: {$this->anchorElementSelectors}");
        }

        try {
            fgetcsv($f);

            while (!feof($f)) {
                /** @var string[]|false|null $row */
                $row = fgetcsv($f);
                if (!is_array($row) || count($row) < 3) {
                    break;
                }
                list(, $uri, $selector) = $row;
                if (!($selector === "" || $selector === "null")) {
                    $selector = "\"{$selector}\"";
                }

                $outputBuffer[] = '{' . implode(", ", [
                    "uri: \"{$uri}\"",
                    "selector: {$selector}"
                ]) . '}';
            }
        } finally {
            fclose($f);
        }

        return implode(", ", $outputBuffer);
    }


    /**
     * @return string
     */
    public function getSupportItems(): string
    {
        $outputBuffer = [];

        $f = fopen($this->supportItems, 'r');
        if (!is_resource($f)) {
            throw new \RuntimeException("Unable to open support items: {$this->supportItems}");
        }

        try {
            fgetcsv($f);

            while (!feof($f)) {
                /** @var string[]|false|null $row */
                $row = fgetcsv($f);
                if (!is_array($row) || count($row) < 3) {
                    break;
                }
                list(, $title, $url) = $row;
                $outputBuffer[] = '{' . implode(", ", [
                    "title: \"{$title}\"",
                    "url: \"{$url}\""
                ]) . '}';
            }
        } finally {
            fclose($f);
        }

        return implode(", ", $outputBuffer);
    }


    /**
     * @return string
     */
    public function getHelpItemCategories(): string
    {
        /** @var array<string,array{category:string,items:string[],pages:string[]}> */
        $helpItemCategories = [];

        $f = fopen($this->categoryItems, 'r');
        if (!is_resource($f)) {
            throw new \RuntimeException("Unable to open category items: {$this->categoryItems}");
        }

        try {
            fgetcsv($f);

            while (!feof($f)) {
                /** @var string[]|false|null $row */
                $row = fgetcsv($f);
                if (!is_array($row) || count($row) < 3) {
                    break;
                }
                list($category,, $title, $url) = $row;
                if (strlen($category) < 1) {
                    break;
                }
                if (!isset($helpItemCategories[$category])) {
                    $helpItemCategories[$category] = [
                        "category" => $category,
                        "items" => [],
                        "pages" => []
                    ];
                }

                $helpItemCategories[$category]['items'][] = '{' . implode(", ", [
                    "title: \"{$title}\"",
                    "url: \"{$url}\""
                ]) . '}';
            }
        } finally {
            fclose($f);
        }


        $f = fopen($this->categoryPages, 'r');
        if (!is_resource($f)) {
            throw new \RuntimeException("Unable to open category pages: {$this->categoryPages}");
        }

        try {
            fgetcsv($f);

            while (!feof($f)) {
                $row = fgetcsv($f);
                if (!is_array($row) || count($row) < 5) {
                    break;
                }
                // Category,Page Title,Page URL,Page URI,Regex Pattern
                list($category,,,, $regex) = $row;
                if (strlen($category) < 1) {
                    break;
                }
                if (!isset($helpItemCategories[$category])) {
                    $helpItemCategories[$category] = [
                        "category" => $category,
                        "items" => [],
                        "pages" => []
                    ];
                }

                $helpItemCategories[$category]['pages'][$regex] = "\"{$regex}\"";
            }
        } finally {
            fclose($f);
        }

        return implode(", ", array_map(
            fn ($helpItemCategory) => '{' . implode(", ", [
                "category: \"" . $helpItemCategory['category'] . "\"",
                "items: [" . implode(", ", $helpItemCategory['items']), "]",
                "pages: [" . implode(", ", $helpItemCategory['pages']), "]",
            ]) . '}',
            $helpItemCategories
        ));
    }


    /**
     * @return string
     */
    public function getConfigTemplate(): string
    {
        $configTemplate = file_get_contents($this->configTemplate);
        return is_string($configTemplate)
            ? $configTemplate
            : throw new \RuntimeException("Unable to open config template: {$this->configTemplate}");
    }
}
