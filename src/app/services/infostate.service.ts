import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfostateService {

  constructor() { }

  ourTeam = [
    {
      id: 0,
      head: 'ASAN MƏKTUB',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 1,
      head: 'BEYNƏLXALQ ƏLAQƏLƏR',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 2,
      head: 'ƏSGƏRƏ MƏKTUB',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 3,
      head: 'KİD',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 4,
      head: 'LİD',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 5,
      head: 'MƏDƏNİYYƏT CARÇISI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 6,
      head: 'NÜMAYƏNDƏLİKLƏR',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 7,
      head: 'ÜMUMİ İŞLƏR',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
  ];

  team = [
    {
      id: 0,
      headerName: 'Dmitriy Yermakov',
      header: 'ASAN Könüllüsü',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: 'https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1673827200&Signature=dmM6AcMDggwh0vT8rWVpnrI--YKHA0LbwQC3Ir6TtO5zZ0h1idHfBchM4gfY-7b~POkQ3HLKCZ5feiN91y1PeyFPl1tx3YvI356pEEgoLuV28DRccKInUg9nf~2nn4k07XUGcfUxQ0cdZC63C9oUP7Z0JACGnFz2oPyfq83HtKRIrcatLIocdGll7rb8g9AQ9-Cxn0RYaqNCtOE3UWjlztvfvpROOcbIeDVz6y-gzUlHsb6KyPZ3dJMe-LhFvv73UcZa4gKDPDvrT2fEDck0IUzOpdCoBdUt-j0wuBZK4WQhaSPEF~zlK6rg3nq9qqVrus7apIjAKHOnJRATEEDBbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 1,
      headerName: 'Elmir Səmədli',
      header: 'ASAN Könüllüsü',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: 'https://s3-alpha-sig.figma.com/img/66bd/1407/2bd03eec82877d67c06ed20c141e7591?Expires=1673827200&Signature=FcSKyf3mgiCB0ArWNWqX3m7NKA1LjfZGd1HdhyoBUvfm3NVNHSNef0hcGkjOt6ChTf2GZnD7Eoi0atWt8oZiQDWqbFu9kl-97v43qU6rsImymCJ7v2vZxX8UC5sVZtLT8K29DIp0qIARoXoHofVTgplh8nTc3-zq11VaCTW2axRzHnO8NshMlV-STs07k-lzsZuMuAmaNSVRaWoT1D8-Z1S2fTARq~xQK1c-n6Oml~MmH3eytFSU~1jP9BYSYed7VI2MAofeHXJS70ApSGdu1pzscJDDjvb4w6NCfMH-VbSfwH8UiMqRh-09KOH8l-ldylROHgxoGWC6OxLlNAgEUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 2,
      headerName: 'Roza Qocayeva',
      header: 'ASAN Könüllüsü',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: 'https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1673827200&Signature=ewV4LL-7am78wx7pdbBJro2wW4CWEbt6LFX5F2rws7x4sIDAluoQfDGqRpjuLDVY9GDkwoI11NCYn6KxRR9uOGBZuqKW9V2pirz343UOzEfLSWF88g9DvOQyuQqbTRY3YQn8EhG~TnLcomntefouqkVse5dMJUp6H60Wj1f3MNGTB0iaXBAGnhgWix-G1wYEy5vi2iip8PMAWYOitN7euXUKO2pvimiqw8f~AVmvtgWQNnA00a7R-bW0egzRchiQ31bawLK-5W22lDV0uXdrdkyX-X0nEoe82bn~LUKhM~6gt0t712pSDHJc0bgcNYKy86hjapayOrVYFmz4tQMrTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 3,
      headerName: 'Dmitriy Yermakov',
      header: 'ASAN Könüllüsü',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: 'https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1673827200&Signature=dmM6AcMDggwh0vT8rWVpnrI--YKHA0LbwQC3Ir6TtO5zZ0h1idHfBchM4gfY-7b~POkQ3HLKCZ5feiN91y1PeyFPl1tx3YvI356pEEgoLuV28DRccKInUg9nf~2nn4k07XUGcfUxQ0cdZC63C9oUP7Z0JACGnFz2oPyfq83HtKRIrcatLIocdGll7rb8g9AQ9-Cxn0RYaqNCtOE3UWjlztvfvpROOcbIeDVz6y-gzUlHsb6KyPZ3dJMe-LhFvv73UcZa4gKDPDvrT2fEDck0IUzOpdCoBdUt-j0wuBZK4WQhaSPEF~zlK6rg3nq9qqVrus7apIjAKHOnJRATEEDBbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 4,
      headerName: 'Elmir Səmədli',
      header: 'ASAN Könüllüsü',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: 'https://s3-alpha-sig.figma.com/img/66bd/1407/2bd03eec82877d67c06ed20c141e7591?Expires=1673827200&Signature=FcSKyf3mgiCB0ArWNWqX3m7NKA1LjfZGd1HdhyoBUvfm3NVNHSNef0hcGkjOt6ChTf2GZnD7Eoi0atWt8oZiQDWqbFu9kl-97v43qU6rsImymCJ7v2vZxX8UC5sVZtLT8K29DIp0qIARoXoHofVTgplh8nTc3-zq11VaCTW2axRzHnO8NshMlV-STs07k-lzsZuMuAmaNSVRaWoT1D8-Z1S2fTARq~xQK1c-n6Oml~MmH3eytFSU~1jP9BYSYed7VI2MAofeHXJS70ApSGdu1pzscJDDjvb4w6NCfMH-VbSfwH8UiMqRh-09KOH8l-ldylROHgxoGWC6OxLlNAgEUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 5,
      headerName: 'lorem',
      header: 'ASAN Könüllüsü',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: 'https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1673827200&Signature=ewV4LL-7am78wx7pdbBJro2wW4CWEbt6LFX5F2rws7x4sIDAluoQfDGqRpjuLDVY9GDkwoI11NCYn6KxRR9uOGBZuqKW9V2pirz343UOzEfLSWF88g9DvOQyuQqbTRY3YQn8EhG~TnLcomntefouqkVse5dMJUp6H60Wj1f3MNGTB0iaXBAGnhgWix-G1wYEy5vi2iip8PMAWYOitN7euXUKO2pvimiqw8f~AVmvtgWQNnA00a7R-bW0egzRchiQ31bawLK-5W22lDV0uXdrdkyX-X0nEoe82bn~LUKhM~6gt0t712pSDHJc0bgcNYKy86hjapayOrVYFmz4tQMrTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
  ]

}
