const Twitter = require('twitter')
require('dotenv').config()

const credentials = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
}

// console.log(credentials)

const client = new Twitter(credentials)

const params = {
  Name: '...',
  count: 1,
  q: 'flávio dino',
  include_entities: false,
}
client.get(
  'https://api.twitter.com/1.1/users/search.json',
  params,
  (error, tweets, response) => {
    if (error) {
      console.log('error: ', error)
      return
    }
    console.log('tweets: ', tweets)
    //console.log('response: ', response.body)
  },
)

const response = {
  id: 25577585,
  id_str: '25577585',
  name: 'Flávio Dino 🇧🇷',
  screen_name: 'FlavioDino',
  description:
    'Governador do Maranhão. Advogado, mestre em Direito Público (UFPE) e professor de Direito na UFMA. Foi juiz federal (1994/2006) e deputado federal (2007/2010)',
  followers_count: 629626,
  profile_image_url_https:
    'https://pbs.twimg.com/profile_images/1409291507258073093/2ImdZpcR_normal.jpg',
}

// type Response = {
//   id: number,
//   id_str: string,
//   name: string,
//   screen_name: string,
//   description: string
//   followers_count: number,
//   profile_image_url_https: string
// }

const any = {
  created_at: 'Sun Jul 11 02:28:05 +0000 2021',
  id: 1414048823006187520,
  id_str: '1414048823006187520',
  text:
    'Plenária do PSB em São Luís para recepcionar a nova direção do Partido sob o comando do governador Flávio Dino. A m… https://t.co/EMoZTj233W',
  truncated: True,
  entities: {
    hashtags: [],
    symbols: [],
    user_mentions: [],
    urls: [
      {
        url: 'https://t.co/EMoZTj233W',
        expanded_url: 'https://twitter.com/i/web/status/1414048823006187520',
        display_url: 'twitter.com/i/web/status/1…',
        indices: [117, 140],
      },
    ],
  },
  source:
    '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
  in_reply_to_status_id: None,
  in_reply_to_status_id_str: None,
  in_reply_to_user_id: None,
  in_reply_to_user_id_str: None,
  in_reply_to_screen_name: None,
  user: {
    id: 137548563,
    id_str: '137548563',
    name: 'Bira do Pindaré',
    screen_name: 'BiradoPindare',
    location: 'Maranhão, Brasil',
    description:
      'Dep Federal.Bancário,professor,advogado e mestre em PolíticasPúblicas. Foi presi do Sind Bancários,Delegado do Trabalho,Sec Ciência Tecnologia Dep Estadual (2x)',
    url: 'https://t.co/KZhNQ2MuHN',
    entities: {
      url: {
        urls: [
          {
            url: 'https://t.co/KZhNQ2MuHN',
            expanded_url: 'https://linktr.ee/biradopindare',
            display_url: 'linktr.ee/biradopindare',
            indices: [0, 23],
          },
        ],
      },
      description: { urls: [] },
    },
    protected: False,
    followers_count: 12903,
    friends_count: 814,
    listed_count: 99,
    created_at: 'Tue Apr 27 02:14:35 +0000 2010',
    favourites_count: 8507,
    utc_offset: None,
    time_zone: None,
    geo_enabled: True,
    verified: True,
    statuses_count: 18455,
    lang: None,
    contributors_enabled: False,
    is_translator: False,
    is_translation_enabled: False,
    profile_background_color: '131516',
    profile_background_image_url:
      'http://abs.twimg.com/images/themes/theme14/bg.gif',
    profile_background_image_url_https:
      'https://abs.twimg.com/images/themes/theme14/bg.gif',
    profile_background_tile: True,
    profile_image_url:
      'http://pbs.twimg.com/profile_images/1323614941140701184/dXlI5HPE_normal.jpg',
    profile_image_url_https:
      'https://pbs.twimg.com/profile_images/1323614941140701184/dXlI5HPE_normal.jpg',
    profile_banner_url:
      'https://pbs.twimg.com/profile_banners/137548563/1605629535',
    profile_link_color: 'F00D09',
    profile_sidebar_border_color: 'EEEEEE',
    profile_sidebar_fill_color: 'EFEFEF',
    profile_text_color: '1A0707',
    profile_use_background_image: True,
    has_extended_profile: True,
    default_profile: False,
    default_profile_image: False,
    following: False,
    follow_request_sent: False,
    notifications: False,
    translator_type: 'none',
    withheld_in_countries: [],
  },
  geo: None,
  coordinates: None,
  place: None,
  contributors: None,
  is_quote_status: False,
  retweet_count: 3,
  favorite_count: 8,
  favorited: False,
  retweeted: False,
  possibly_sensitive: False,
  lang: 'pt',
}
