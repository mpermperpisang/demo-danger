const { danger } = require("danger");

function qaListByUsername(userList) {
  const payloadC = (user) => ({
    username: user,
  });

  return danger.github.api.users.getByUsername(
    payloadC(userList),
  ).then((result) => result.data.name);
}

async function qaListByTeam(qeSlug) {
  const qaList = {};
  const payloadB = (slug) => ({
    org: 'pt-kompas-media-nusantara',
    // eslint-disable-next-line camelcase
    team_slug: slug,
  });

  const membersList = await danger.github.api.teams.listMembersInOrg(
    payloadB(qeSlug),
  ).then((result) => result.data);

  for (let index = 0; index < membersList.length - 1; index += 1) {
    const userLogin = membersList[index].login;
    const getFullName = qaListByUsername(userLogin);

    if ((getFullName !== null) && (userLogin !== 'qeomid-ide')) {
      qaList[userLogin] = { username: userLogin, fullname: getFullName };
    }
  }

  return qaList
}

qaListByTeam('qe-development');
