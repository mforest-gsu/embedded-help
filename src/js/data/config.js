const config = {
  roleName: "", // LEAVE BLANK
  uri: "", // LEAVE BLANK
  userIdKey: "Session.UserId",
  roleNameKey: "Session.RoleName",
  orgUnitId: "1070555",
  lpPrefix: "/d2l/api/lp/1.44",
  embeddedHelpId: "gsu_embedded_help",
  buttonLabel: "iCollege Help",
  helpItemHeader: "Get Help With...",
  supportItemHeader: "Additional Support",
  allowedRoles: ["Administrator", "Instructor"],

  d2lPageMainId: [
    { uri: "^((/d2l/login)|(/d2l/logout)).*$", selector: null },
    { uri: "^/d2l/le/activities/edit/.*$", selector: "body" },
    { uri: ".*", selector: "div.d2l-page-main" },
  ],
  supportItems: [
    {
      title: "Contact a Learning Technologist",
      url: "https://gsutech.service-now.com/sp?id=sc_cat_item&sys_id=206e7369dbf75f00b7bff46c0c96196a",
    },
    { title: "USG Help Center", url: "https://d2lhelp.view.usg.edu/s/" },
    {
      title: "Share feedback",
      url: "https://gsu.qualtrics.com/jfe/form/SV_3PNkk4NQ50wMGB8",
    },
  ],
  helpItemCategories: [
    {
      category: "Account Settings",
      items: [
        {
          title: "Changing time zone settings",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011933",
        },
        {
          title: "Checking accessibility	",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011953",
        },
      ],
      pages: [
        "^/d2l/lp/preferences/preferences_main/preferences_main\\.d2l.*$",
      ],
    },
    {
      category: "Announcements",
      items: [
        {
          title: "Creating announcements",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010297",
        },
        {
          title: "Embedding videos",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010762",
        },
        {
          title: "Setting up course notifications",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010110",
        },
      ],
      pages: ["^/d2l/lms/news/.*$"],
    },
    {
      category: "Assignments",
      items: [
        {
          title: "Creating assignments",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010070",
        },
        {
          title: "Grading assignments",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010095",
        },
        {
          title: "Downloading submissions",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010086",
        },
        {
          title: "Using TurnItIn",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010328",
        },
        {
          title: "Assessing Core IMPACTS",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011997",
        },
      ],
      pages: [
        "^/d2l/le/activities/edit/[a-zA-Z0-9]+\\?.*returnUrl=%2fd2l%2flms%2fdropbox%2fadmin%2f.*$",
        "^/d2l/le/dropbox/.*$",
        "^/d2l/lms/dropbox/.*$",
      ],
    },
    {
      category: "Attendence and Locations",
      items: [
        {
          title: "Tracking attendence in iCollege",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011977",
        },
        {
          title: "Checking Webex attendence",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011931",
        },
      ],
      pages: [
        "^/d2l/le/locations/.*$",
        "^/d2l/le/seatingcharts/.*$",
        "^/d2l/lms/attendance/.*$",
      ],
    },
    {
      category: "Broken Links",
      items: [
        {
          title: "Checking accessibility",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011953",
        },
      ],
      pages: ["^/d2l/brokenLinks/.*$"],
    },
    {
      category: "Checklists",
      items: [
        {
          title: "Creating and managing checklists",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010055",
        },
      ],
      pages: ["^/d2l/lms/checklist/.*$"],
    },
    {
      category: "Classlist",
      items: [
        {
          title: "Checking access and emailing students",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010054",
        },
        {
          title: "Changing enrollment status",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010051",
        },
        {
          title: "Adding students to a non-credit course",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010038",
        },
        {
          title: "Adding instructors and TAs to a course",
          url: "https://gsutech.service-now.com/sp?id=sc_cat_item&sys_id=6dbd8365db501340601b502bdc9619dc",
        },
      ],
      pages: [
        "^/d2l/lms/classlist/.*$",
        "^/d2l/lp/profile/profile_view\\.d2l.*$",
      ],
    },
    {
      category: "Competencies",
      items: [
        {
          title: "Grading with competencies",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011919",
        },
        {
          title: "Assessing Core IMPACTS",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011997",
        },
      ],
      pages: ["^/d2l/le/lo/.*$"],
    },
    {
      category: "Content",
      items: [
        {
          title: "Adding content",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010035",
        },
        {
          title: "Copying, moving, and deleting content",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010066",
        },
        {
          title: "Checking accessibility",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011953",
        },
        {
          title: "Sharing Kaltura videos",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010049",
        },
        {
          title: "Adding external learning tools",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010061",
        },
      ],
      pages: ["^/d2l/le/content/[0-9]+/.*$"],
    },
    {
      category: "Copy Components/Learning Object Repository",
      items: [
        {
          title: "Copying content between courses",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010056",
        },
        {
          title: "Requesting course template creation",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010797",
        },
      ],
      pages: ["^/d2l/lms/importExport/.*$", "^/d2l/lor/.*$"],
    },
    {
      category: "Course Admin",
      items: [
        {
          title: "Setting course start and end dates",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010754",
        },
        {
          title: "Copying content between courses",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010056",
        },
        {
          title: "Viewing my course as a student",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010837",
        },
        {
          title: "Learning more about iCollege",
          url: "https://cetloe.gsu.edu/tool/icollege-digital-learning-environment/",
        },
      ],
      pages: ["^/d2l/lp/cmc/.*$"],
    },
    {
      category:
        "Course Design Accelerator, Instructional Design Wizard, and Course Builder",
      items: [
        {
          title: "Learning about iCollege",
          url: "https://cetloe.gsu.edu/tool/icollege-digital-learning-environment/",
        },
        {
          title: "Building a course",
          url: "https://sites.gsu.edu/icollegenow/",
        },
      ],
      pages: ["^/d2l/lms/accelerator/.*$", "^/d2l/lms/courseBuilder/.*$"],
    },
    {
      category: "Course Homepage",
      items: [
        {
          title: "Creating announcements",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010297",
        },
        {
          title: "Editing your course homepage",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011846",
        },
        {
          title: "Customizing your course navbar",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011932",
        },
        {
          title: "Viewing my course as a student",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010837",
        },
      ],
      pages: ["^/d2l/home/[0-9]+(\\?.*)?$"],
    },
    {
      category: "Course Search",
      items: [
        {
          title: "Finding and pinning courses",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011922",
        },
        {
          title: "Finding crosslisted courses",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010729",
        },
      ],
      pages: ["^/d2l/le/manageCourses/search/.*$"],
    },
    {
      category: "Dates and Calendar",
      items: [
        {
          title: "Setting course start and end dates",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010754",
        },
        {
          title: "Using the iCollege calendar",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010754",
        },
        {
          title: "Creating an assignment",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010070",
        },
        {
          title: "Creating a discussion topic",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011954",
        },
      ],
      pages: [
        "^/d2l/le/availabilitydatedefaults/.*$",
        "^/d2l/le/calendar/.*$",
        "^/d2l/lms/manageDates/date_manager.d2l.*$",
        "^/d2l/lp/manageCourses/course_offering_info_viewedit.d2l.*",
      ],
    },
    {
      category: "Discussions",
      items: [
        {
          title: "Creating discussion forums and topics",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011954",
        },
        {
          title: "Grading discussions",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011827",
        },
        {
          title: "Learning more about discussions",
          url: "https://cetloe.gsu.edu/tool/icollege-discussions/",
        },
      ],
      pages: [
        "^/d2l/common/popup/popup.d2l\\?.*popBodySrc=/d2l/lms/discussions/.*",
        "^/d2l/le/[0-9]+/discussions/.*$",
        "^/d2l/le/activities/edit/[a-zA-Z0-9]+\\?.*returnUrl=%2fd2l%2fle%[0-9]+]%2fdiscussions%2fList.*$",
        "^/d2l/lms/discussions/.*$",
      ],
    },
    {
      category: "Edit Homepage and Navbar",
      items: [
        {
          title: "Editing your course homepage",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011846",
        },
        {
          title: "Customizing your course navbar",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011932",
        },
      ],
      pages: [
        "^/d2l/lp/homepage/admin/widget/.*$",
        "^/d2l/lp/homepages/[0-9]+/.*$",
        "^/d2l/lp/navbars/[0-9]+/customgroup/create.*$",
        "^/d2l/lp/navbars/[0-9]+/customgroup/edit.*$",
        "^/d2l/lp/navbars/[0-9]+/customlink/create.*$",
        "^/d2l/lp/navbars/[0-9]+/customlink/edit.*$",
        "^/d2l/lp/navbars/[0-9]+/customlink/list.*$",
        "^/d2l/lp/navbars/[0-9]+/list.*$",
        "^/d2l/lp/navbars/[0-9]+/navbar/Create.*$",
        "^/d2l/lp/navbars/[0-9]+/navbar/Edit.*$",
        "^/d2l/lp/navbars/[0-9]+/theme/create.*$",
        "^/d2l/lp/navbars/[0-9]+/theme/edit.*$",
        "^/d2l/lp/navbars/[0-9]+/themes/list.*$",
      ],
    },
    {
      category: "Edit Quiz",
      items: [
        {
          title: "Creating quizzes",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011916",
        },
        {
          title: "Setting up special access",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010581",
        },
        {
          title: "Password protecting quizzes",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010689",
        },
        {
          title: "Learning more about quizzes",
          url: "https://cetloe.gsu.edu/tool/icollege-quizzes/",
        },
      ],
      pages: [
        "^/d2l/le/activities/edit/[a-zA-Z0-9]+\\?.*returnUrl=%2fd2l%2flms%2fquizzing%2fadmin%2fquizzes_manage\\.d2l.*$",
        "^/d2l/lms/quizzing/user/quiz_summary\\.d2l.*$",
      ],
    },
    {
      category: "Email",
      items: [
        {
          title: "Using iCollege email",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010278",
        },
        {
          title: "Emailing an entire class",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010730",
        },
        {
          title: "Forwarding iCollege email",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010183",
        },
        {
          title: "Configuring email settings",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010106",
        },
      ],
      pages: ["^/d2l/lms/email/frame\\.d2l.*$"],
    },
    {
      category: "Entering Grades and Configuring Settings",
      items: [
        {
          title: "Understanding the Grades tool",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011981",
        },
        {
          title: "Setting up a gradebook",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011967",
        },
        {
          title: "Releasing grades to students",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011927",
        },
        {
          title: "Creating grade exemptions",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011969",
        },
        {
          title: "Learning more about grades in iCollege",
          url: "https://cetloe.gsu.edu/tool/icollege-grades/#get-started",
        },
      ],
      pages: [
        "^/d2l/lms/grades/admin/enter/user_list_view\\.d2l.*$",
        "^/d2l/lms/grades/admin/manage/gradebook_eventlog\\.d2l.*$",
        "^/d2l/lms/grades/admin/settings/calculation_options\\.d2l.*$",
        "^/d2l/lms/grades/admin/settings/orgunit_display_options\\.d2l.*$",
        "^/d2l/lms/grades/admin/settings/personal_display_options\\.d2l.*$",
      ],
    },
    {
      category: "Export Grades",
      items: [
        {
          title: "Exporting grades from iCollege",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010755",
        },
        {
          title: "Releasing grades to students",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011927",
        },
        {
          title: "Learning more about grades in iCollege",
          url: "https://cetloe.gsu.edu/tool/icollege-grades/#get-started",
        },
      ],
      pages: [
        "^/d2l/lms/grades/admin/enter/grade_user_edit\\.d2l.*$",
        "^/d2l/lms/grades/admin/importexport/export/options_edit\\.d2l.*$",
        "^/d2l/lms/grades/admin/manage/gradebook_eventlog\\.d2l.*$",
      ],
    },
    {
      category: "External Learning Tools",
      items: [
        {
          title: "Adding external learning tools",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010061",
        },
        {
          title: "Finding digital teaching tools",
          url: "https://cetloe.gsu.edu/teaching-technology/",
        },
      ],
      pages: [
        "^/d2l/le/ltiadvantage/[0-9]+/links.*$",
        "^/d2l/lms/links/manage_links\\.d2l.*$",
        "^/d2l/lp/tools/orgUnits/[0-9]+.*$",
      ],
    },
    {
      category: "FAQs",
      items: [
        {
          title: "Creating FAQs",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010067",
        },
      ],
      pages: ["^/d2l/lms/faq/.*$"],
    },
    {
      category: "Generic LTI",
      items: [
        {
          title: "Adding external learning tools",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010061",
        },
        {
          title: "Learning more about external learning tools",
          url: "https://cetloe.gsu.edu/teaching-technology/",
        },
      ],
      pages: [
        "^/d2l/common/dialogs/quickLink/quickLink\\.d2l.*$",
        "^/d2l/lp/auth/oauth2/consent.*$",
      ],
    },
    {
      category: "Global Homepage",
      items: [
        {
          title: "Copying content between courses",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010056",
        },
        {
          title: "Finding and pinning courses",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011922",
        },
        {
          title: "Setting course start and end dates",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010754",
        },
        {
          title: "Learning more about iCollege",
          url: "https://cetloe.gsu.edu/tool/icollege-digital-learning-environment/",
        },
      ],
      pages: ["^/d2l/home(\\?.*)?$"],
    },
    {
      category: "Glossary",
      items: [
        {
          title: "Managing a glossary",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010302",
        },
      ],
      pages: ["^/d2l/lms/glossary/.*$"],
    },
    {
      category: "Gradebook Setup",
      items: [
        {
          title: "Setting up a gradebook",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011967",
        },
        {
          title: "Managing grade items",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011970",
        },
        {
          title: "Choosing a grading system",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011968",
        },
        {
          title: "Learning more about grades in iCollege",
          url: "https://cetloe.gsu.edu/tool/icollege-grades/#get-started",
        },
      ],
      pages: [
        "^/d2l/lms/grades/admin/importexport/import/file_select\\.d2l.*$",
        "^/d2l/lms/grades/admin/manage/gradeslist\\.d2l.*$",
        "^/d2l/lms/grades/admin/schemes/schemes_list\\.d2l.*$",
        "^/d2l/lms/grades/admin/settings/wizard_options\\.d2l.*$",
      ],
    },
    {
      category: "Grading Quizzes",
      items: [
        {
          title: "Grading quizzes",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010727",
        },
        {
          title: "Displaying quiz results",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010728",
        },
        {
          title: "Learning more about quizzes",
          url: "https://cetloe.gsu.edu/tool/icollege-quizzes/",
        },
      ],
      pages: [
        "^/d2l/lms/quizzing/admin/mark/.*$",
        "^/d2l/lms/quizzing/admin/stats/.*$",
      ],
    },
    {
      category: "Groups",
      items: [
        {
          title: "Creating groups",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010068",
        },
        {
          title: "Enrolling students in groups",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010093",
        },
        {
          title: "Setting up group evaluations",
          url: "https://cetloe.gsu.edu/tool/feedbackfruits-group-evaluation/",
        },
      ],
      pages: [
        "^/d2l/lms/group/.*$",
        "^/d2l/lp/inlineHelp/[0-9]+/help\\?titleTerm=Groups.OrientationText.hdgGroups&descriptionTerm=Groups.OrientationText.txtGroups",
      ],
    },
    {
      category: "iLearn",
      items: [
        {
          title: "Attending upcoming CETLOE workshops",
          url: "https://cetloe.gsu.edu/workshops-events/",
        },
        {
          title: "Finding teaching advancement programs",
          url: "https://cetloe.gsu.edu/teaching-advancement/",
        },
      ],
      pages: ["^/d2l/lp/navbars/1070555/customlinks/external/1610881.*$"],
    },
    {
      category: "Intelligent Agents",
      items: [
        {
          title: "Creating intelligent agents",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0012006",
        },
        {
          title: "Learning more about intelligent agents",
          url: "https://cetloe.gsu.edu/tool/icollege-intelligent-agents/",
        },
      ],
      pages: ["^/d2l/lms/IntelligentAgents/.*$"],
    },
    {
      category: "Kaltura",
      items: [
        {
          title: "Adding Kaltura media to a course",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010049",
        },
        {
          title: "Adding media to the course gallery",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010725",
        },
        {
          title: "Viewing Kaltura video analytics",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010767",
        },
        {
          title: "Creating a video quiz",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010765",
        },
        {
          title: "Learning more about Kaltura",
          url: "https://cetloe.gsu.edu/tool/kaltura/",
        },
      ],
      pages: [
        "^/d2l/common/dialogs/quickLink/quickLink\\.d2l\\?.*framedName=Katura.*$",
      ],
    },
    {
      category: "Lockdown",
      items: [
        {
          title: "Setting up Respondus Lockdown",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010123",
        },
        {
          title: "Learning more about Respondus",
          url: "https://cetloe.gsu.edu/tool/respondus-lockdown-browser-monitor/",
        },
      ],
      pages: [
        "^/d2l/lms/quizzing/admin/modify/quiz_newedit_respondus\\.d2l.*$",
      ],
    },
    {
      category: "Manage Files",
      items: [
        {
          title: "Managing files in iCollege",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010285",
        },
      ],
      pages: ["^/d2l/lp/manageFiles/.*$"],
    },
    {
      category: "Manage Quizzes",
      items: [
        {
          title: "Creating quizzes",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011916",
        },
        {
          title: "Viewing the quiz event log",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010282",
        },
        {
          title: "Grading quizzes",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010727",
        },
        {
          title: "Learning more about quizzes",
          url: "https://cetloe.gsu.edu/tool/icollege-quizzes/",
        },
      ],
      pages: ["^/d2l/lms/quizzing/admin/quizzes_.*$"],
    },
    {
      category: "Notifications",
      items: [
        {
          title: "Setting up course notifications",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010110",
        },
        {
          title: "Optimizing a course for Pulse",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010818",
        },
      ],
      pages: ["^/d2l/Notifications/.*$"],
    },
    {
      category: "Question Library",
      items: [
        {
          title: "Creating quizzes",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011916",
        },
        {
          title: "Learning more about quizzes",
          url: "https://cetloe.gsu.edu/tool/icollege-quizzes/",
        },
      ],
      pages: [
        "^/d2l/lms/qc/main_frame\\.d2l.*$",
        "^/d2l/lp/inlineHelp/[0-9]+/help\\?.*titleTerm=QuestionCollection\\.OrientationText\\.hdgQuestionLibrary.*$",
      ],
    },
    {
      category: "Quick Eval",
      items: [
        {
          title: "Using Quick Eval",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010773",
        },
        {
          title: "Grading assignments",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010095",
        },
        {
          title: "Grading quizzes",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010727",
        },
        {
          title: "Grading discussions",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011827",
        },
        {
          title: "Assessing Career-Ready Compentencies",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011997",
        },
      ],
      pages: ["^/d2l/le/[0-9]+/quickeval/.*$"],
    },
    {
      category: "Rubrics",
      items: [
        {
          title: "Creating rubrics",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011943",
        },
        {
          title: "Grading assignments",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010095",
        },
        {
          title: "Grading discussions",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011827",
        },
      ],
      pages: ["^/d2l/lp/rubrics/.*$"],
    },
    {
      category: "Student Progress",
      items: [
        {
          title: "Tracking student progress",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010299",
        },
      ],
      pages: [
        "^/d2l/le/classprogress/userprogress/.*$",
        "^/d2l/le/userprogress/.*$",
      ],
    },
    {
      category: "Surveys",
      items: [
        {
          title: "Setting up surveys",
          url: "https://community.d2l.com/brightspace/kb/articles/3674-set-up-surveys",
        },
        {
          title: "Tracking survey results",
          url: "https://community.d2l.com/brightspace/kb/articles/3468-track-survey-progress-and-results",
        },
        {
          title: "Using other survey tools",
          url: "https://cetloe.gsu.edu/tool/qualtrics/",
        },
      ],
      pages: ["^/d2l/le/content/[0-9]+/Survey/.*$", "^/d2l/lms/survey/.*$"],
    },
    {
      category: "User Profile",
      items: [
        {
          title: "Changing personal settings",
          url: "https://community.d2l.com/brightspace/kb/articles/5464-change-your-personal-settings-in-brightspace",
        },
        {
          title: "Changing time zone settings",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0011933",
        },
      ],
      pages: ["^/d2l/lp/profile/profile_edit.d2l.*$"],
    },
    {
      category: "Webex",
      items: [
        {
          title: "Configuring Webex",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010656",
        },
        {
          title: "Enabling live captioning",
          url: "https://gsutech.service-now.com/sp?id=kb_article_view&sysparm_article=KB0010806",
        },
        {
          title: "Setting up Webex Teams",
          url: "https://gsutech.service-now.com/sp?id=kb_article&sysparm_article=KB0010738",
        },
        {
          title: "Learning more about Webex",
          url: "https://cetloe.gsu.edu/tool/webex/",
        },
      ],
      pages: [
        "^/d2l/common/dialogs/quickLink/quickLink\\.d2l\\?.*framedName=Webex.*$",
        "^/d2l/lp/auth/oauth2/consent\\?.*client=ea8cb525-3dde-42fe-a7c8-37968979a8d0.*$",
      ],
    },
  ],
};

export { config };
