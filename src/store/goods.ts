const imgPath = '../assets/goods/';

const DUMMY_GOODS = [
  {
    id: 'g1',
    img: imgPath + 'goods_1.jpeg',
    name: '1 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 50,
  },
  {
    id: 'g2',
    img: imgPath + 'goods_2.jpeg',
    name: '2 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 60,
  },
  {
    id: 'g3',
    img: imgPath + 'goods_3.jpeg',
    name: '3 What is Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 70,
  },
  {
    id: 'g4',
    img: imgPath + 'goods_4.jpeg',
    name: '4 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 80,
  },
  {
    id: 'g5',
    img: imgPath + 'goods_5.jpeg',
    name: '5 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 90,
  },
  {
    id: 'g6',
    img: imgPath + 'goods_6.jpeg',
    name: '6 What is Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 100,
  },
  {
    id: 'g7',
    img: imgPath + 'goods_7.jpeg',
    name: '7 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 110,
  },
  {
    id: 'g8',
    img: imgPath + 'goods_8.jpeg',
    name: '8 What is Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 120,
  },
  {
    id: 'g9',
    img: imgPath + 'goods_9.jpeg',
    name: '9 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 130,
  },
  {
    id: 'g10',
    img: imgPath + 'goods_10.jpeg',
    name: '10 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 140,
  },
  {
    id: 'g11',
    img: imgPath + 'goods_11.jpeg',
    name: '11 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 150,
  },
  {
    id: 'g12',
    img: imgPath + 'goods_12.jpeg',
    name: '12 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 160,
  },
  {
    id: 'g13',
    img: imgPath + 'goods_13.jpeg',
    name: '13 What is Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 170,
  },
  {
    id: 'g14',
    img: imgPath + 'goods_14.jpeg',
    name: '14 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 180,
  },
  {
    id: 'g15',
    img: imgPath + 'goods_15.jpeg',
    name: '15 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 190,
  },
  {
    id: 'g16',
    img: imgPath + 'goods_16.jpeg',
    name: '16 What is Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 200,
  },
  {
    id: 'g17',
    img: imgPath + 'goods_17.jpeg',
    name: '17 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 50,
  },
  {
    id: 'g18',
    img: imgPath + 'goods_18.jpeg',
    name: '18 What is Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 60,
  },
  {
    id: 'g19',
    img: imgPath + 'goods_19.jpeg',
    name: '19 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 70,
  },
  {
    id: 'g20',
    img: imgPath + 'goods_20.jpeg',
    name: '20 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 80,
  },
  {
    id: 'g21',
    img: imgPath + 'goods_21.jpeg',
    name: '21 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 90,
  },
  {
    id: 'g22',
    img: imgPath + 'goods_22.jpeg',
    name: '22 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 100,
  },
  {
    id: 'g23',
    img: imgPath + 'goods_23.jpeg',
    name: '23 What is Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 110,
  },
  {
    id: 'g24',
    img: imgPath + 'goods_24.jpeg',
    name: '24 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 120,
  },
  {
    id: 'g25',
    img: imgPath + 'goods_25.jpeg',
    name: '25 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 130,
  },
  {
    id: 'g26',
    img: imgPath + 'goods_26.jpeg',
    name: '26 What is Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 140,
  },
  {
    id: 'g27',
    img: imgPath + 'goods_27.jpeg',
    name: '27 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 150,
  },
  {
    id: 'g28',
    img: imgPath + 'goods_28.jpeg',
    name: '28 What is Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 160,
  },
  {
    id: 'g29',
    img: imgPath + 'goods_29.jpeg',
    name: '29 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 170,
  },
  {
    id: 'g30',
    img: imgPath + 'goods_30.jpeg',
    name: '30 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 180,
  },
  {
    id: 'g31',
    img: imgPath + 'goods_31.jpeg',
    name: '31 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 190,
  },
  {
    id: 'g32',
    img: imgPath + 'goods_32.jpeg',
    name: '32 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 200,
  },
  {
    id: 'g33',
    img: imgPath + 'goods_33.jpeg',
    name: '33 What is Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 50,
  },
  {
    id: 'g34',
    img: imgPath + 'goods_34.jpeg',
    name: '34 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 60,
  },
  {
    id: 'g35',
    img: imgPath + 'goods_35.jpeg',
    name: '35 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 70,
  },
  {
    id: 'g36',
    img: imgPath + 'goods_36.jpeg',
    name: '36 What is Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: 80,
  },
  {
    id: 'g37',
    img: imgPath + 'goods_37.jpeg',
    name: '37 What is Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 90,
  },
];

export default DUMMY_GOODS;
