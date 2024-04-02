import { config } from ".";

export async function getConfig() {
  config.uri = window.location.pathname + window.location.search;
  config.roleName = await fetchRoleName(config);
  return await Promise.resolve(config);
}

async function fetchRoleName({ userIdKey, roleNameKey, orgUnitId, lpPrefix }) {
  const rolePrefix = await getRolePrefix(userIdKey).catch(() => null);
  if (rolePrefix === null) {
    return "";
  }

  let roleName = sessionStorage.getItem(roleNameKey);

  if (roleName === null || !roleName.startsWith(rolePrefix)) {
    roleName = await fetch(
      `${lpPrefix}/enrollments/myenrollments/${orgUnitId}/access`
    )
      .then((response) => response.json())
      .then((accessInfo) => accessInfo.Access.ClasslistRoleName)
      .catch(() => null);

    if (roleName === null) {
      return "";
    }

    sessionStorage.setItem(roleNameKey, rolePrefix + roleName);
  } else {
    roleName = roleName.substring(rolePrefix.length);
  }

  return roleName;
}

async function getRolePrefix(userIdKey, retries = 25) {
  return await new Promise((resolve, reject) => {
    let count = 0;
    const callback = () => {
      let element = localStorage.getItem(userIdKey);

      if (element !== null) {
        resolve(`${element}.`);
      } else if (++count < retries) {
        setTimeout(callback, 200);
      } else {
        reject(null);
      }
    };
    setTimeout(callback, 10);
  });
}
