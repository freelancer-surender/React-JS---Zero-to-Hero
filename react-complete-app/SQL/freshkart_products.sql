CREATE DATABASE  IF NOT EXISTS `freshkart` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `freshkart`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: freshkart
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `was` decimal(10,0) DEFAULT NULL,
  `weight` varchar(45) DEFAULT NULL,
  `pic` varchar(1200) DEFAULT NULL,
  `popular` tinyint DEFAULT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Orange',87,115,'1 kg','https://cdn.shopify.com/s/files/1/0581/2151/9284/products/IndianOrange_4_750x810.jpg?v=1631522534',1,'fruits'),(2,'Apple',143,150,'1 kg','https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1600',1,'fruits'),(3,'Grapes',90,90,'1 kg','https://media.istockphoto.com/id/682505832/photo/ripe-red-grape-pink-bunch-with-leaves-isolated-on-white-with-clipping-path-full-depth-of-field.jpg?b=1&s=612x612&w=0&k=20&c=FV-KZqPFwi09flA5ZokOT4Pg2-1rbge1epBRpvqTLJY=',0,'fruits'),(4,'Pomegranate',127,135,'1 kg','https://media.istockphoto.com/id/1397537185/photo/pomegranate-fruit-on-white.jpg?b=1&s=612x612&w=0&k=20&c=yavxGZB-me5y_84SUzGWSeiL0jgl9wKe2nMbdeXWZLA=',1,'fruits'),(5,'Mango',92,92,'1 kg','https://media.istockphoto.com/id/1318935291/photo/mango-fruit.jpg?b=1&s=612x612&w=0&k=20&c=K4EYuuP3ai32llB6v-PehPIvsFiYPTjNVyMTSlKfUOo=',1,'fruits'),(6,'Strawberry',225,225,'1 kg','https://cdn.shopify.com/s/files/1/0258/4307/3103/products/asset_40_1024x.jpg?v=1571838231',0,'fruits'),(7,'Banana',25,32,'0.5 kg','https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?b=1&s=612x612&w=0&k=20&c=LE7IRYWDGyPHLw2p-OrVpM07h7KVaIeb1Jn104y_pkU=',1,'fruits'),(8,'Pineapple',47,47,'1 pc','https://media.istockphoto.com/id/172862474/photo/pineapple-a-ripe-fresh-fruit-food-whole-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=r9xODovJC1xZDDInu2tqaZRTt17FhahVbhN3Dmnsx40=',0,'fruits'),(9,'Kiwi',163,163,'1 kg','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/800px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg',0,'fruits'),(10,'Cherry',200,200,'250 gm','https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&w=1600',0,'fruits'),(11,'Watermelon',112,112,'1 pc','https://media.istockphoto.com/id/861283144/photo/fresh-watermelon.jpg?b=1&s=612x612&w=0&k=20&c=ExPIwqaTxtU_OKq-BrLsktrCZ0rVL6Omea7FmF0kPAc=',0,'fruits'),(12,'Papaya',46,46,'1 pc','https://exoticfruitbox.com/wp-content/uploads/2015/10/papaya-3-Exotic.jpg',0,'fruits'),(13,'Blueberry',220,250,'0.5 kg','https://media.istockphoto.com/id/496264172/photo/blueberries.jpg?b=1&s=612x612&w=0&k=20&c=-M_WR1PqxSLSlIekhBqAuQYLtxU2wX4N7cae1dDVidY=',0,'fruits'),(14,'Tomato',40,40,'1 kg','https://media.istockphoto.com/id/1398317661/photo/ripe-cherry-tomatoes-isolated-on-white-background-macro-shot-popular-worldwide-product-as.jpg?b=1&s=612x612&w=0&k=20&c=eMFBw6JmcLx9e8b2mbpWdj50dfF79dx2NLMYzzcocpA=',1,'vegetables'),(15,'Mushroom',52,55,'250 gm','https://media.istockphoto.com/id/1431311103/photo/flying-in-air-champignon-mushrooms-and-champignon-mushroom-slices-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=psswr7cxsXLE0S_VUD0b0ZHfCVKv2u4Q0FO1NZwuNUs=',1,'vegetables'),(16,'Carrot',29,29,'0.5 kg','http://cdn.shopify.com/s/files/1/0451/1101/7626/products/carrotseeds.jpg?v=1604032858',0,'vegetables'),(17,'Potato',32,32,'1 kg','https://media.istockphoto.com/id/182146174/photo/potatoes-covered-in-soil-against-white.jpg?b=1&s=612x612&w=0&k=20&c=sEO7uEc-DO-YIIGkNYPXUbVLnzbWH_tCuRAA1Bs0xPw=',1,'vegetables'),(18,'Onion',34,35,'1 kg','https://www.bigbasket.com/media/uploads/p/xxl/10000148-2_2-fresho-onion.jpg',1,'vegetables'),(19,'Beans',12,12,'250 gm','https://media.istockphoto.com/id/182035936/photo/fresh-beans.jpg?b=1&s=612x612&w=0&k=20&c=Fs1xP8nVMBP21-UkTIwt03tgW5dmSWXUMmPYLxhxVRw=',0,'vegetables'),(20,'Beetroot',26,26,'0.5 kg','https://cdn.shopify.com/s/files/1/0274/3481/articles/LYOFOOD-freeze-dried-organic-beetroot-powders-EU-01.jpg?v=1490710701',0,'vegetables'),(21,'Capsicum',14,14,'1 pc','https://cdn.shopify.com/s/files/1/1380/2059/products/Capsicum-Red_large.jpg?v=1598079508',0,'vegetables'),(22,'Ginger',12,12,'100 gm','https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61SCxbFGpWL._SX679_.jpg',1,'vegetables'),(23,'Spinach',16,16,'200 gm','https://www.jiomart.com/images/product/600x600/590004479/spinach-paalak-1-bunch-approx-100-g-300-g-product-images-o590004479-p590004479-0-202203170434.jpg',0,'vegetables'),(24,'Broccoli',82,90,'1 pc','https://cdn.shopify.com/s/files/1/0275/8020/3094/products/Broccoli.jpg?v=1655750100',0,'vegetables');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-09  6:31:51
