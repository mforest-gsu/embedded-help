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

  d2lPageMainId: [ANCHOR_ELEMENT_SELECTORS],
  supportItems: [SUPPORT_ITEMS],
  helpItemCategories: [HELP_ITEM_CATEGORIES],
};

export { config };
