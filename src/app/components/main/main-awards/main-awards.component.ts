import { Component } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-awards',
  templateUrl: './main-awards.component.html',
  styleUrls: ['./main-awards.component.css']
})

export class MainAwardsComponent {

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  ourAwards = [
      {
        id: "1",
        image: 'https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1674432000&Signature=h8wcbCN9C7fezZgqwR4JUGjJrkfDWJyhS7-x5bODP71eX57D3zR6YdxeMF44lQu-8gmlOxfZPJh78NOxEykQmGhq3cvZO3w~ZxCDClya~vQstHCWOp4ndBASCvrt8Q~71g0pRKCMn1d2pRv2javwBkFthWHb067d2zMO-DH877q5siJHqKKXW63gNzuusg8SyIhDUHy~VQgmux4uo~IJu6lJeXjiYbQlF0gUWtNpoyfuVWFwssJnrlRl~ivx8DBeunpAXCmMmwkl17x-YR~ji6XR2Ys5wH-E2V0WdJrHViRdlIkdlgq7AjVZ2u3U9fjb-ltDAnMl6UvTYGXAQjP69Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        head: "İlin Ən Uğurlu Gənclər Təşkilatı - 2021",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
      },
      {
        id: "2",
        image: "https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1674432000&Signature=bV3YHW6MXdFr~eteieaHzGbdNndidZ3GSmxNGg6CxhFH~0Phd97CVfPBEat3LfHqrvOCO8usVTCyvj3aCTRabJiKtrSbpinVAc~aoXpHigD0episcpQf0kuGTflAnFVPRyoaJsYZiak7QZ0xYpATemJQCAjLk169GvoeM7Bs9DCrVLYL7YxWoMGpI4SmQrGlNQ~MX7SuCbsVT4bWhoH2ySxKpxbwdyQq~4ZwWU7yH2np~DrGPJArT6Ll7ui9toLsx6Ra9DvhFljvSAcj7bjUi8PVriSe4kIDPJ3DzvA~3l9YcLC~kV6wyxdGAC3wyAGZpl~itcv5Ze7OLsH7iEP0FQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        head: "İlin  Ən Yaradıcı Layihəsi Mükafatı - 2021",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
      },
      {
        id: "3",
        image: "https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1674432000&Signature=h8wcbCN9C7fezZgqwR4JUGjJrkfDWJyhS7-x5bODP71eX57D3zR6YdxeMF44lQu-8gmlOxfZPJh78NOxEykQmGhq3cvZO3w~ZxCDClya~vQstHCWOp4ndBASCvrt8Q~71g0pRKCMn1d2pRv2javwBkFthWHb067d2zMO-DH877q5siJHqKKXW63gNzuusg8SyIhDUHy~VQgmux4uo~IJu6lJeXjiYbQlF0gUWtNpoyfuVWFwssJnrlRl~ivx8DBeunpAXCmMmwkl17x-YR~ji6XR2Ys5wH-E2V0WdJrHViRdlIkdlgq7AjVZ2u3U9fjb-ltDAnMl6UvTYGXAQjP69Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        head: "İlin Ən Uğurlu Gənclər Təşkilatı - 2021",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
      },
      {
        id: "4",
        image: "https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1674432000&Signature=bV3YHW6MXdFr~eteieaHzGbdNndidZ3GSmxNGg6CxhFH~0Phd97CVfPBEat3LfHqrvOCO8usVTCyvj3aCTRabJiKtrSbpinVAc~aoXpHigD0episcpQf0kuGTflAnFVPRyoaJsYZiak7QZ0xYpATemJQCAjLk169GvoeM7Bs9DCrVLYL7YxWoMGpI4SmQrGlNQ~MX7SuCbsVT4bWhoH2ySxKpxbwdyQq~4ZwWU7yH2np~DrGPJArT6Ll7ui9toLsx6Ra9DvhFljvSAcj7bjUi8PVriSe4kIDPJ3DzvA~3l9YcLC~kV6wyxdGAC3wyAGZpl~itcv5Ze7OLsH7iEP0FQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        head: "İlin  Ən Yaradıcı Layihəsi Mükafatı - 2021",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
      },
      {
        id: "1",
        image: 'https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1674432000&Signature=h8wcbCN9C7fezZgqwR4JUGjJrkfDWJyhS7-x5bODP71eX57D3zR6YdxeMF44lQu-8gmlOxfZPJh78NOxEykQmGhq3cvZO3w~ZxCDClya~vQstHCWOp4ndBASCvrt8Q~71g0pRKCMn1d2pRv2javwBkFthWHb067d2zMO-DH877q5siJHqKKXW63gNzuusg8SyIhDUHy~VQgmux4uo~IJu6lJeXjiYbQlF0gUWtNpoyfuVWFwssJnrlRl~ivx8DBeunpAXCmMmwkl17x-YR~ji6XR2Ys5wH-E2V0WdJrHViRdlIkdlgq7AjVZ2u3U9fjb-ltDAnMl6UvTYGXAQjP69Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        head: "İlin Ən Uğurlu Gənclər Təşkilatı - 2021",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
      },
      {
        id: "2",
        image: "https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1674432000&Signature=bV3YHW6MXdFr~eteieaHzGbdNndidZ3GSmxNGg6CxhFH~0Phd97CVfPBEat3LfHqrvOCO8usVTCyvj3aCTRabJiKtrSbpinVAc~aoXpHigD0episcpQf0kuGTflAnFVPRyoaJsYZiak7QZ0xYpATemJQCAjLk169GvoeM7Bs9DCrVLYL7YxWoMGpI4SmQrGlNQ~MX7SuCbsVT4bWhoH2ySxKpxbwdyQq~4ZwWU7yH2np~DrGPJArT6Ll7ui9toLsx6Ra9DvhFljvSAcj7bjUi8PVriSe4kIDPJ3DzvA~3l9YcLC~kV6wyxdGAC3wyAGZpl~itcv5Ze7OLsH7iEP0FQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        head: "İlin  Ən Yaradıcı Layihəsi Mükafatı - 2021",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
      },
      {
        id: "3",
        image: "https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1674432000&Signature=h8wcbCN9C7fezZgqwR4JUGjJrkfDWJyhS7-x5bODP71eX57D3zR6YdxeMF44lQu-8gmlOxfZPJh78NOxEykQmGhq3cvZO3w~ZxCDClya~vQstHCWOp4ndBASCvrt8Q~71g0pRKCMn1d2pRv2javwBkFthWHb067d2zMO-DH877q5siJHqKKXW63gNzuusg8SyIhDUHy~VQgmux4uo~IJu6lJeXjiYbQlF0gUWtNpoyfuVWFwssJnrlRl~ivx8DBeunpAXCmMmwkl17x-YR~ji6XR2Ys5wH-E2V0WdJrHViRdlIkdlgq7AjVZ2u3U9fjb-ltDAnMl6UvTYGXAQjP69Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        head: "İlin Ən Uğurlu Gənclər Təşkilatı - 2021",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
      },
      {
        id: "4",
        image: "https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1674432000&Signature=bV3YHW6MXdFr~eteieaHzGbdNndidZ3GSmxNGg6CxhFH~0Phd97CVfPBEat3LfHqrvOCO8usVTCyvj3aCTRabJiKtrSbpinVAc~aoXpHigD0episcpQf0kuGTflAnFVPRyoaJsYZiak7QZ0xYpATemJQCAjLk169GvoeM7Bs9DCrVLYL7YxWoMGpI4SmQrGlNQ~MX7SuCbsVT4bWhoH2ySxKpxbwdyQq~4ZwWU7yH2np~DrGPJArT6Ll7ui9toLsx6Ra9DvhFljvSAcj7bjUi8PVriSe4kIDPJ3DzvA~3l9YcLC~kV6wyxdGAC3wyAGZpl~itcv5Ze7OLsH7iEP0FQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        head: "İlin  Ən Yaradıcı Layihəsi Mükafatı - 2021",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
      }
  ]

  customOptions: any = {
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['←', '→'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: true
  }

}
