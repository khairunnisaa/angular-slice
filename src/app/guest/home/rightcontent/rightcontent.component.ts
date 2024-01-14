import { Component } from '@angular/core';

@Component({
  selector: 'app-rightcontent',
  standalone: false,
  templateUrl: './rightcontent.component.html',
  styleUrls: ['./rightcontent.component.css']
})
export class RightcontentComponent {

  activity = [
    {
      name: "Jhon Stainlor",
      comment: "This is a wider card with supporting text below.",
      status: 'commend',
      datePost: '2 seconds ago',
      icon: 'fa fa-comment',
      image: 'https://media.istockphoto.com/id/1470637046/id/foto/melihat-pebisnis-smartphone.jpg?s=2048x2048&w=is&k=20&c=cnXnCt9dPJsWe-wgGwiN20bDgCXPbUmtSRfWtoA3WEw='
    },

    {
      name: "Jhon Stainlor",
      comment: "Creative people must follow these goldmine.",
      status: 'added a new video',
      datePost: '5 minute ago',
      icon: 'fa fa-video',
      image: 'https://media.istockphoto.com/id/1470637046/id/foto/melihat-pebisnis-smartphone.jpg?s=2048x2048&w=is&k=20&c=cnXnCt9dPJsWe-wgGwiN20bDgCXPbUmtSRfWtoA3WEw='
    },

    {
      name: "Jhon Stainor",
      comment: "How became expert",
      status: 'share a document',
      datePost: '1 day ago',
      icon: 'fa fa-file',
      image: 'https://media.istockphoto.com/id/1470637046/id/foto/melihat-pebisnis-smartphone.jpg?s=2048x2048&w=is&k=20&c=cnXnCt9dPJsWe-wgGwiN20bDgCXPbUmtSRfWtoA3WEw='
    },

    {
      name: "Arjun",
      comment: "Social guard",
      status: 'unlocked new badge',
      datePost: '44 minutes ago',
      icon: 'fa fa-comment',
      image: 'https://media.istockphoto.com/id/1732768158/id/foto/pengusaha-muda-asia-yang-cantik-berdiri-dengan-tangan-disilangkan-terisolasi-dengan-latar.jpg?s=2048x2048&w=is&k=20&c=Ta093mCEH4-T_AuzRok0W1_CUUcdZwx-gubYxSQ1C0o='
    },

    {
      name: "Michael",
      comment: "How do I start a website design project",
      status: 'uploaded a new video',
      datePost: '1 hour ago',
      icon: 'fa fa-video',
      image: 'https://media.istockphoto.com/id/1391161369/id/foto/pengusaha-muda-asia.jpg?s=2048x2048&w=is&k=20&c=nTvrwO7gFjCI3E_EiB1RuGdbFnJifxg6pSa4SSjfp-A='
    },

    {
      name: "Jhon Stainlor",
      comment: "Some marketing tricks",
      status: 'like a video',
      datePost: '19 minutes ago',
      icon: 'fa fa-heart',
      image: 'https://media.istockphoto.com/id/1470637046/id/foto/melihat-pebisnis-smartphone.jpg?s=2048x2048&w=is&k=20&c=cnXnCt9dPJsWe-wgGwiN20bDgCXPbUmtSRfWtoA3WEw='
    },
  ]

  channel = [
    {
      nameChannel: "Google",
      image: 'https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },

    {
      nameChannel: "Dribble",
      image: 'https://images.unsplash.com/photo-1566308356054-9a2d0164508f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },

    {
      nameChannel: "Microsoft",
      image: 'https://media.istockphoto.com/id/1617910874/id/foto/pengusaha-yang-bekerja-dengan-data-dan-grafik-dalam-dokumen-spreadsheet-untuk-analisis-online.jpg?s=2048x2048&w=is&k=20&c=lQDJRb4d6hQI4in62u1OXWUX0_1eJ5WmGISSIf4ocOw='
    },

    {
      nameChannel: "Weather Channel",
      image: 'https://media.istockphoto.com/id/1421735894/id/foto/badai-di-bangkok.jpg?s=2048x2048&w=is&k=20&c=rKAcg8XFoqpV28ze-BtodMvSEG2y73fE3I_XzXZBC4Y='
    },

    {
      nameChannel: "Gurus",
      image: 'https://media.istockphoto.com/id/1475235938/id/foto/siswa-mengangkat-tangan-mereka-selama-pelajaran-guru-di-sekolah-dasar.jpg?s=2048x2048&w=is&k=20&c=ZtrBq22j-89fRDs6JSwNTt1aR97-o67S2-6Nu1EoXPQ='
    },

    {
      nameChannel: "IMedia",
      image: 'https://media.istockphoto.com/id/624460222/id/foto/konsep-dinding-motion-media-smart-tv.jpg?s=2048x2048&w=is&k=20&c=yZdzUa5K_-GU7hzD98xnTGXs9DbpCCcwuyvKe-f_n9k='
    },

    {
      nameChannel: "Creative",
      image: 'https://media.istockphoto.com/id/1466761319/id/foto/enam-bagian-tangan-musisi-memainkan-alat-musik-latar-belakang-musik.jpg?s=2048x2048&w=is&k=20&c=UVL0xRFwaNAE5PwELzM5n4seO0uKBvD9Ng2epq02pX8='
    },

    {
      nameChannel: "Khan Studio",
      image: 'https://media.istockphoto.com/id/1400794599/id/foto/videografer-close-up-juru-kamera-pria-dengan-kamera-film.jpg?s=2048x2048&w=is&k=20&c=tycdDelnm-J_5fRNC50TsYfmI1Y1uOIRYRMT2Ann7o8='
    },

    {
      nameChannel: "Gmail",
      image: 'https://media.istockphoto.com/id/1718915951/id/foto/tangan-menunjuk-ikon-email-konsep-pemberitahuan-pesan-gmail-keamanan-jaringan-ponsel-smartphone.jpg?s=2048x2048&w=is&k=20&c=3jm-gQO_eC7lYWtGtRqA1M8rq71bXj61fzLIIafodpE='
    },

    {
      nameChannel: "Yahoo",
      image: 'https://media.istockphoto.com/id/474268142/id/foto/kamus-lama-terbuka-pada-kata-yahoo.jpg?s=2048x2048&w=is&k=20&c=A_ouSrNjg3dombxiVbyuu9ov4ReSlZe0hwbsxqxbocs='
    },
  ]

}


