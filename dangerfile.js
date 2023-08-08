const { danger } = require("danger");

async function a() {
  const d = [];
  const payloadB = {
    org: 'pt-kompas-media-nusantara',
    team_slug: 'quality-engineer',
  }

  const a = await danger.github.api.teams.listMembersInOrg(payloadB).then(result => result.data);

  for (i = 0; i < a.length; ++i) {
    const b = await danger.github.api.users.getByUsername({
      username: a[i].login
    }).then(result => result.data.name)

    if (!d.includes(b) && b !== null) {
      d.push({user: a[i].login, fullname: b})
    }
  }

  console.log(d)
}

a()
