import book_img from '../../image/proj_imgs/book.png';
import portfolio_img from '../../image/proj_imgs/Screenshot (115).png';
import calci_img from '../../image/proj_imgs/calculator_img.png';
import ecom from '../../image/proj_imgs/e-commerse.png';
import cinemate from '../../image/proj_imgs/cinemate.png';
import snake from '../../image/proj_imgs/snake.png';
import codebook from "../../image/Screenshot (183).png"

const proj_data = [
  {
    id: 1,
    project_name: 'Codebook',
    proj_creation_date: 'Aug 2023',
    project_image: codebook,
    proj_code_like: 'https://github.com/prasadsontakke77/codebook',
    proj_live_link: 'https://codebook-ps.netlify.app/',
  }, {
    id: 2,
    project_name: 'Cinemate',
    proj_creation_date: 'jan 2023',
    project_image: cinemate,
    proj_code_like: 'https://github.com/prasadsontakke77/cinemate',
    proj_live_link: 'https://ps-cenemate.netlify.app/',
  },
  {
    id: 3,
    project_name: 'E-Commerce ',
    proj_creation_date: 'jun 2023',
    project_image: ecom,
    proj_code_like: 'https://github.com/prasadsontakke77/E-Commerce-website',
    proj_live_link: 'https://ps-e-commerse.netlify.app/',
  },

  {
    id: 4,
    project_name: 'Portfolio Website',
    proj_creation_date: 'feb 2023',
    project_image: portfolio_img,
    proj_code_like: 'https://github.com/prasadsontakke77/portfolio-wesite',
    proj_live_link: 'https://prasad-sontakke.netlify.app/',
  },
  {
    id: 5,
    project_name: 'Book App',
    proj_creation_date: 'May 2023',
    project_image: book_img,
    proj_code_like: 'https://github.com/prasadsontakke77/Book-App',
    proj_live_link: 'https://glistening-maamoul-b18cc4.netlify.app',
  },
  {
    id: 6,
    project_name: 'Calculator App',
    proj_creation_date: 'March 2023',
    project_image: calci_img,
    proj_code_like: 'https://github.com/prasadsontakke77/calculator-app',
    proj_live_link:
      'https://64886acc84889516c2688ddf--venerable-cendol-bab10e.netlify.app/',
  },

  {
    id: 7,
    project_name: 'Snake game',
    proj_creation_date: 'feb 2022',
    project_image: snake,
    proj_code_like: 'https://github.com/prasadsontakke77/snake-game',
    proj_live_link: 'https://snake-game-ps.netlify.app/',
  },
];

export default proj_data;
