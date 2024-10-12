var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const products = [
    {
      name: "Kopi Arabika",
      description: "Rasa halus dan aroma yang menggoda.",
      image: "/images/arabika.jpg",
    },
    {
      name: "Kopi Robusta",
      description: "Kekuatan rasa yang kuat dan penuh energi.",
      image: "/images/robusta.jpg",
    },
    {
      name: "Kopi Blend",
      description: "Kombinasi sempurna dari berbagai jenis kopi.",
      image: "/images/blend.jpg",
    },
  ];

  const testimonials = [
    {
        message: 'Kopi Arabika dari sini adalah yang terbaik yang pernah saya coba! Aroma yang menggoda dan rasa halusnya membuat setiap tegukan menjadi pengalaman yang tak terlupakan. Saya sangat merekomendasikannya untuk para pecinta kopi!',
        name: 'Joko',
    },
    {
        message: 'Rasa kopi Robusta sangat kuat dan menggugah semangat! Kadar kafeinnya yang tinggi membuat saya merasa segar setiap kali meminumnya. Kopi ini sempurna untuk memulai hari saya dengan penuh energi!',
        name: 'Sari',
    },
    {
        message: 'Kopi Blend adalah favorit saya. Selalu memuaskan! Kombinasi berbagai jenis biji kopi memberikan rasa yang seimbang dan kompleks. Setiap kali saya menikmatinya, saya menemukan nuansa baru yang membuat saya ingin terus kembali.',
        name: 'Diana',
    },
];


  res.render('index' , {title : 'Kopi Kopi', products, testimonials, layout : 'main'});
});

router.get('/api/products/:id', (req, res) => {
  const products = [
    { id: 1, name: "Kopi Arabika", description: "Rasa halus dan aroma yang menggoda." },
    { id: 2, name: "Kopi Robusta", description: "Kekuatan rasa yang kuat dan penuh energi." },
    { id: 3, name: "Kopi Blend", description: "Kombinasi sempurna dari berbagai jenis kopi." }
  ];

  const productId = parseInt(req.params.id); 
  const product = products.find(p => p.id === productId); 
  
  if (!product) {
    return res.status(404).json({ message: "Produk tidak ditemukan" });
  }

  res.json(product);
});

module.exports = router;
