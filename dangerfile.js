const { danger } = require("danger");

async function a() {
  const d = [];
  const payloadB = {
    org: 'pt-kompas-media-nusantara',
    team_slug: 'quality-engineer',
  }

  const a = await danger.github.api.teams.listMembersInOrg(payloadB).then(result => result.data);

  a.forEach((response) => {
    const b = danger.github.api.users.getByUsername({
      username: response.login
    }).then(result => result.data.name)

    if (!d.includes(b) && b !== null) {
      d.push({user: response.login, fullname: b})
    }
  });

  console.log(d)
}

a()
