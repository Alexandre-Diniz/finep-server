const twitter = require('../services/twitter')
const Profile = require('../Models/Profile')
const delay = require('../utils/delay')

const idList = [
  '@adelmosoares65',
  '@AdrianoSarney',
  '@anadogasoficial',
  '@ArnaldoMelo12',
  '@DepCarlinhosMA',
  '@DepCesarPires',
  '@cironeton',
  '@Dep_CleideC',
  '@DaniellaTema',
  '@detinhaslz',
  '@helenaduailibe_',
  '@ThaizaHortegal',
  '@DuarteJr_',
  '@HolandaEdivaldo',
  '@glalbertcutrim',
  '@depmarcoscaldas',
  '@micaldamasceno',
  '@FCNetoE',
  '@OthelinoN',
  '@DepRafaelleitoa',
  '@Rildoamaral',
  '@robertocostama_',
  '@SocorroWaquim',
  '@SouWellington__',
  '@yglesiomoyses',
  '@AluisioMendesMA',
  '@DepAndreFufuca',
  '@BiradoPindare',
  '@CleberVerde10',
  '@EdilazioJunior_',
  '@gastaodvieira',
  '@gilcutrim',
  '@RochaHildorocha',
  '@dep_joaomarcelo',
  '@josimarPL22',
  '@junior_lourenco',
  '@DepJuscelino',
  '@marciojerry',
  '@depmarrecafilho',
  '@pastorgil_',
  '@PauloMarinhoJr1',
  '@depPedroLucasF',
  '@Dep_ZeCarlosPT',
  '@FlavioDino',
  '@carlosbrandaoma',
  '@DepMarcelo',
  '@GALDINODIEGO',
  '@joslene65',
  '@vidigalzinha',
  '@Rmrocha01Maia',
  '@rubenspereirajr',
  'MarcosAPacheco_',
  '@cynthiamota71',
  '@jeffersportela',
  '@xicogoncalves',
  '@Tati_ativista',
  '@catulejr',
  '@davitelles',
  '@FelipeCCamarao',
  '@claytonoleto',
  '@DiegoRolim11',
  '@nayra_monteiro',
  '@carloselula',
  '@sergiodelmiro',
  '@RodLago',
  '@Marcio_Honaiser',
  '@SimplicioAraujo',
  '@depcafeteira',
  '@RicardoCappelli',
  '@jowberthsalvess',
  '@tedlago',
  '@marcosgrande1',
  '@fabiolaewerton',
  '@julioc_mendonca',
  '@fconagib',
  '@alexoliveirr',
  '@gilbertoleda',
  '@marrapanarede',
  '@JohnCutrim',
  '@diegoemir',
  '@clodoaldocorrea',
  '@joaquimhaickel',
  '@colunadoklamt',
  '@marcoadeca',
  '@atual7',
  '@oestadoma',
  '@EduardoBraide',
  '@Drjoelnunesjr',
  '@DomingosBlog',
  '@BlogdoNeto',
  '@blogdoluispablo',
  '@blogdasilvia',
  '@jornalpequeno',
  '@imparcialonline',
  '@imirante',
  '@tvbandma',
  '@tvguara23',
  '@SLZONLINE',
  '@oquartopoder4',
  '@blogmadeverdade',
  '@D98MA',
  '@1RicardoMarques',
  '@wevertonrocha',
  '@elizianegama',
  '@RobertoRocha_MA',
  '@EHolandaJr',
  '@LahesioB',
]

let count = 0

async function run() {
  for (screen_name of idList) {
    try {
      const profile = await twitter.get(
        'https://api.twitter.com/1.1/users/show.json',
        { screen_name },
      )
      const profileExists = await Profile.findOne({
        where: {
          id_str: profile.screen_name,
        },
      })
      if (!profileExists) {
        Profile.create({
          id_str: profile.id_str,
          name: profile.name,
          screen_name: profile.screen_name,
          description: profile.description,
          followers_count: profile.followers_count,
          profile_image_url_https: profile.profile_image_url_https,
          verified: profile.verified,
        })
      }
      await delay(2000)
      count = count + 1
      console.log(`${count}/${idList.length}`)
    } catch (error) {
      console.error(error)
    }
  }
}

run()
