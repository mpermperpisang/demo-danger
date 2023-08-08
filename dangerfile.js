const { danger } = require("danger");

async function a() {
  const d = {};
  const payloadB = (slug) => ({
    org: 'pt-kompas-media-nusantara',
    team_slug: slug,
  })
  const payloadC = (username) => ({
    username
  })

  const a = await danger.github.api.teams.listMembersInOrg(payloadB('quality-engineer')).then(result => result.data);

  for (i = 0; i < a.length; ++i) {
    const b = await danger.github.api.users.getByUsername(
      payloadC(a[i].login)
    ).then(result => result.data.name)

    if ((b !== null) && (a[i].login !== 'qeomid-ide')) {
      d[a[i].login] = b;
    }
  }

  console.log(d.mpermperpisang)
}

a()
