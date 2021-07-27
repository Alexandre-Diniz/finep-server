-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: dev2
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `engagements`
--

DROP TABLE IF EXISTS `engagements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `engagements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_str` text,
  `last_id_str` text,
  `retweet_count` int NOT NULL DEFAULT '0',
  `favorite_count` int NOT NULL DEFAULT '0',
  `consulted_in` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=466 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `engagements`
--

LOCK TABLES `engagements` WRITE;
/*!40000 ALTER TABLE `engagements` DISABLE KEYS */;
INSERT INTO `engagements` VALUES (228,'2670726740','1415326190018121728',160,1080,'2021-07-14 15:57:38','2021-07-14 15:57:38','2021-07-14 15:57:38','2021-07-14 15:57:38'),(229,'25577585','1415265896352866311',11,0,'2021-07-14 15:57:40','2021-07-14 15:57:40','2021-07-14 15:57:40','2021-07-14 15:57:40'),(230,'342994346','1415319362790121477',36,156,'2021-07-14 15:57:41','2021-07-14 15:57:41','2021-07-14 15:57:41','2021-07-14 15:57:41'),(231,'1335942718040793091','1415335211508899840',0,6,'2021-07-14 15:57:43','2021-07-14 15:57:43','2021-07-14 15:57:43','2021-07-14 15:57:43'),(232,'798892388366381056','1415326113740492801',0,1,'2021-07-14 15:57:44','2021-07-14 15:57:44','2021-07-14 15:57:44','2021-07-14 15:57:44'),(233,'1335942718040793091','1415335211508899840',0,6,'2021-07-14 15:57:46','2021-07-14 15:57:46','2021-07-14 15:57:46','2021-07-14 15:57:46'),(234,'1084783141','1413171907961057282',0,13,'2021-07-14 15:57:48','2021-07-14 15:57:48','2021-07-14 15:57:48','2021-07-14 15:57:48'),(235,'1081389350137532416','1414737320436277250',0,1,'2021-07-14 15:57:49','2021-07-14 15:57:49','2021-07-14 15:57:49','2021-07-14 15:57:49'),(236,'1335942718040793091','1415335211508899840',0,6,'2021-07-14 15:57:51','2021-07-14 15:57:51','2021-07-14 15:57:51','2021-07-14 15:57:51'),(237,'127285692','1414693214649524228',1,0,'2021-07-14 15:57:52','2021-07-14 15:57:52','2021-07-14 15:57:52','2021-07-14 15:57:52'),(238,'1335942718040793091','1415335211508899840',0,6,'2021-07-14 15:57:53','2021-07-14 15:57:53','2021-07-14 15:57:53','2021-07-14 15:57:53'),(239,'185344587','1412892941564137476',50,1929,'2021-07-14 15:57:55','2021-07-14 15:57:55','2021-07-14 15:57:55','2021-07-14 15:57:55'),(240,'68712576','1415258166221316096',2229,8725,'2021-07-14 15:57:56','2021-07-14 15:57:56','2021-07-14 15:57:56','2021-07-14 15:57:56'),(241,'40053694','1415339739582976001',485,0,'2021-07-14 15:57:58','2021-07-14 15:57:58','2021-07-14 15:57:58','2021-07-14 15:57:58'),(242,'1081389350137532416','1414737320436277250',0,1,'2021-07-14 15:58:00','2021-07-14 15:58:00','2021-07-14 15:58:00','2021-07-14 15:58:00'),(243,'64563165','1413655491155308545',1,21,'2021-07-14 15:58:01','2021-07-14 15:58:01','2021-07-14 15:58:01','2021-07-14 15:58:01'),(244,'63508635','1415301478051426304',3,0,'2021-07-14 15:58:02','2021-07-14 15:58:02','2021-07-14 15:58:02','2021-07-14 15:58:02'),(245,'155659213','1414933377434767361',20015,467621,'2021-07-14 15:58:04','2021-07-14 15:58:04','2021-07-14 15:58:04','2021-07-14 15:58:04'),(246,'813286','1413848757083545601',15678,149722,'2021-07-14 15:58:05','2021-07-14 15:58:05','2021-07-14 15:58:05','2021-07-14 15:58:05'),(247,'128372940','1415272451420954626',2269,11949,'2021-07-14 15:58:07','2021-07-14 15:58:07','2021-07-14 15:58:07','2021-07-14 15:58:07'),(248,'33014349','1413848037122838538',1,0,'2021-07-14 15:58:08','2021-07-14 15:58:08','2021-07-14 15:58:08','2021-07-14 15:58:08'),(249,'1081389350137532416','1414737320436277250',0,1,'2021-07-14 15:58:10','2021-07-14 15:58:10','2021-07-14 15:58:10','2021-07-14 15:58:10'),(250,'116751115','1415297901685874688',1,0,'2021-07-14 15:58:11','2021-07-14 15:58:11','2021-07-14 15:58:11','2021-07-14 15:58:11'),(251,'794866608','1403811862165311488',7,11,'2021-07-14 15:58:13','2021-07-14 15:58:13','2021-07-14 15:58:13','2021-07-14 15:58:13'),(252,'2583179096','1415295340828315649',0,2,'2021-07-14 15:58:14','2021-07-14 15:58:14','2021-07-14 15:58:14','2021-07-14 15:58:14'),(253,'1093329310579154944','1193989163961536512',0,2,'2021-07-14 15:58:16','2021-07-14 15:58:16','2021-07-14 15:58:16','2021-07-14 15:58:16'),(254,'116751115','1415297901685874688',1,0,'2021-07-14 15:58:17','2021-07-14 15:58:17','2021-07-14 15:58:17','2021-07-14 15:58:17'),(255,'794866608','1403811862165311488',7,11,'2021-07-14 15:58:19','2021-07-14 15:58:19','2021-07-14 15:58:19','2021-07-14 15:58:19'),(256,'2583179096','1415295340828315649',0,2,'2021-07-14 15:58:20','2021-07-14 15:58:20','2021-07-14 15:58:20','2021-07-14 15:58:20'),(257,'1093329310579154944','1193989163961536512',0,2,'2021-07-14 15:58:22','2021-07-14 15:58:22','2021-07-14 15:58:22','2021-07-14 15:58:22'),(258,'1025103133981257728','1323326698507636736',0,0,'2021-07-14 15:58:23','2021-07-14 15:58:23','2021-07-14 15:58:23','2021-07-14 15:58:23'),(259,'2773697022','516965542134317056',0,1,'2021-07-14 15:58:25','2021-07-14 15:58:25','2021-07-14 15:58:25','2021-07-14 15:58:25'),(260,'1909765362','1394790918146887682',4,0,'2021-07-14 15:58:26','2021-07-14 15:58:26','2021-07-14 15:58:26','2021-07-14 15:58:26'),(261,'1086232379482689536','1415306252213702660',1,0,'2021-07-14 15:58:28','2021-07-14 15:58:28','2021-07-14 15:58:28','2021-07-14 15:58:28'),(262,'1118481835376431104','1415304146689957891',0,0,'2021-07-14 15:58:29','2021-07-14 15:58:29','2021-07-14 15:58:29','2021-07-14 15:58:29'),(263,'1095733666003800064','1414581160789823492',0,1,'2021-07-14 15:58:31','2021-07-14 15:58:31','2021-07-14 15:58:31','2021-07-14 15:58:31'),(264,'632737286','1414538991047741441',0,0,'2021-07-14 15:58:32','2021-07-14 15:58:32','2021-07-14 15:58:32','2021-07-14 15:58:32'),(265,'1095138301844033537','1414975148155883523',0,0,'2021-07-14 15:58:34','2021-07-14 15:58:34','2021-07-14 15:58:34','2021-07-14 15:58:34'),(266,'63508635','1415301478051426304',3,0,'2021-07-14 15:58:35','2021-07-14 15:58:35','2021-07-14 15:58:35','2021-07-14 15:58:35'),(267,'2793462577','1404819072479543296',1,0,'2021-07-14 15:58:37','2021-07-14 15:58:37','2021-07-14 15:58:37','2021-07-14 15:58:37'),(268,'231407772','1346593055034519552',3,0,'2021-07-14 15:58:38','2021-07-14 15:58:38','2021-07-14 15:58:38','2021-07-14 15:58:38'),(269,'167968053','25060169171',0,0,'2021-07-14 15:58:40','2021-07-14 15:58:40','2021-07-14 15:58:40','2021-07-14 15:58:40'),(270,'1177021738053525504','1414684029887078409',2,3,'2021-07-14 15:58:41','2021-07-14 15:58:41','2021-07-14 15:58:41','2021-07-14 15:58:41'),(271,'795228290','300133869787705344',1,0,'2021-07-14 15:58:43','2021-07-14 15:58:43','2021-07-14 15:58:43','2021-07-14 15:58:43'),(272,'583377940','1412235491152433154',1,39,'2021-07-14 15:58:44','2021-07-14 15:58:44','2021-07-14 15:58:44','2021-07-14 15:58:44'),(273,'2317252641','1414923376297140230',1,0,'2021-07-14 15:58:46','2021-07-14 15:58:46','2021-07-14 15:58:46','2021-07-14 15:58:46'),(274,'179147542','393503201372041216',0,3,'2021-07-14 15:58:47','2021-07-14 15:58:47','2021-07-14 15:58:47','2021-07-14 15:58:47'),(275,'323263308','1415314260016734208',1,0,'2021-07-14 15:58:49','2021-07-14 15:58:49','2021-07-14 15:58:49','2021-07-14 15:58:49'),(276,'140480459','1415326018504638467',0,0,'2021-07-14 15:58:52','2021-07-14 15:58:52','2021-07-14 15:58:52','2021-07-14 15:58:52'),(277,'1576755078','1415333981839572993',1,0,'2021-07-14 15:58:54','2021-07-14 15:58:54','2021-07-14 15:58:54','2021-07-14 15:58:54'),(278,'2654800357','1415337764426498049',0,3,'2021-07-14 15:58:55','2021-07-14 15:58:55','2021-07-14 15:58:55','2021-07-14 15:58:55'),(279,'3254270357','1356325339681710082',0,7,'2021-07-14 15:58:56','2021-07-14 15:58:56','2021-07-14 15:58:56','2021-07-14 15:58:56'),(280,'137548563','1415332408551936007',2,9,'2021-07-14 15:58:58','2021-07-14 15:58:58','2021-07-14 15:58:58','2021-07-14 15:58:58'),(281,'3092387621','1057803224026177536',0,8,'2021-07-14 15:58:59','2021-07-14 15:58:59','2021-07-14 15:58:59','2021-07-14 15:58:59'),(282,'1113965533542719488','1414946773915811843',0,1,'2021-07-14 15:59:01','2021-07-14 15:59:01','2021-07-14 15:59:01','2021-07-14 15:59:01'),(283,'25311569','1413418938961219584',1,2,'2021-07-14 15:59:02','2021-07-14 15:59:02','2021-07-14 15:59:02','2021-07-14 15:59:02'),(284,'163165805','1415113233539772423',0,0,'2021-07-14 15:59:04','2021-07-14 15:59:04','2021-07-14 15:59:04','2021-07-14 15:59:04'),(285,'97445850','1413600452428673034',0,1,'2021-07-14 15:59:05','2021-07-14 15:59:05','2021-07-14 15:59:05','2021-07-14 15:59:05'),(286,'1233024544270684161','1414224985393180673',0,0,'2021-07-14 15:59:07','2021-07-14 15:59:07','2021-07-14 15:59:07','2021-07-14 15:59:07'),(287,'948927124316008449','1414554999271698432',0,8,'2021-07-14 15:59:08','2021-07-14 15:59:08','2021-07-14 15:59:08','2021-07-14 15:59:08'),(288,'2970617333','1415009809800339459',0,1,'2021-07-14 15:59:11','2021-07-14 15:59:11','2021-07-14 15:59:11','2021-07-14 15:59:11'),(289,'48122425','1415267917982314500',36,0,'2021-07-14 15:59:13','2021-07-14 15:59:13','2021-07-14 15:59:13','2021-07-14 15:59:13'),(290,'1063411413845241856','1414638758356467717',0,1,'2021-07-14 15:59:14','2021-07-14 15:59:14','2021-07-14 15:59:14','2021-07-14 15:59:14'),(291,'1067790946090315776','1415106838228504585',1,4,'2021-07-14 15:59:16','2021-07-14 15:59:16','2021-07-14 15:59:16','2021-07-14 15:59:16'),(292,'1350454263386959872','1411367407365627904',7,0,'2021-07-14 15:59:17','2021-07-14 15:59:17','2021-07-14 15:59:17','2021-07-14 15:59:17'),(293,'1104120809482866688','1415277216368402433',0,0,'2021-07-14 15:59:19','2021-07-14 15:59:19','2021-07-14 15:59:19','2021-07-14 15:59:19'),(294,'1325494376','1415052624148189185',2,2,'2021-07-14 15:59:21','2021-07-14 15:59:21','2021-07-14 15:59:21','2021-07-14 15:59:21'),(295,'25577585','1415265896352866311',11,0,'2021-07-14 15:59:22','2021-07-14 15:59:22','2021-07-14 15:59:22','2021-07-14 15:59:22'),(296,'74849428','1415101952011145222',0,2,'2021-07-14 15:59:23','2021-07-14 15:59:23','2021-07-14 15:59:23','2021-07-14 15:59:23'),(297,'176832003','1325554603207876615',1,13,'2021-07-14 15:59:25','2021-07-14 15:59:25','2021-07-14 15:59:25','2021-07-14 15:59:25'),(298,'71882668','1415086571716497416',1,98,'2021-07-14 15:59:26','2021-07-14 15:59:26','2021-07-14 15:59:26','2021-07-14 15:59:26'),(299,'78714361','1415249279254474762',5,0,'2021-07-14 15:59:28','2021-07-14 15:59:28','2021-07-14 15:59:28','2021-07-14 15:59:28'),(300,'139194124','1413483744430755843',1,0,'2021-07-14 15:59:29','2021-07-14 15:59:29','2021-07-14 15:59:29','2021-07-14 15:59:29'),(301,'863587335757336585','1415018742589820938',0,1,'2021-07-14 15:59:31','2021-07-14 15:59:31','2021-07-14 15:59:31','2021-07-14 15:59:31'),(302,'57906445','1415322889272844292',1,13,'2021-07-14 15:59:32','2021-07-14 15:59:32','2021-07-14 15:59:32','2021-07-14 15:59:32'),(303,'717744189774151680','1413300707881635848',2,61,'2021-07-14 15:59:34','2021-07-14 15:59:34','2021-07-14 15:59:34','2021-07-14 15:59:34'),(304,'140669124','1413634332175052800',30,0,'2021-07-14 15:59:35','2021-07-14 15:59:35','2021-07-14 15:59:35','2021-07-14 15:59:35'),(305,'429751053','1412396559782879235',1,8,'2021-07-14 15:59:37','2021-07-14 15:59:37','2021-07-14 15:59:37','2021-07-14 15:59:37'),(306,'164696186','1415298128283058182',1,1,'2021-07-14 15:59:38','2021-07-14 15:59:38','2021-07-14 15:59:38','2021-07-14 15:59:38'),(307,'179650596','1415272630517698561',11,0,'2021-07-14 15:59:40','2021-07-14 15:59:40','2021-07-14 15:59:40','2021-07-14 15:59:40'),(308,'264391266','1415264533829017603',36,0,'2021-07-14 15:59:41','2021-07-14 15:59:41','2021-07-14 15:59:41','2021-07-14 15:59:41'),(309,'48515258','1415296214556368897',1,0,'2021-07-14 15:59:43','2021-07-14 15:59:43','2021-07-14 15:59:43','2021-07-14 15:59:43'),(310,'3181396187','1415324710607495169',2,7,'2021-07-14 15:59:44','2021-07-14 15:59:44','2021-07-14 15:59:44','2021-07-14 15:59:44'),(311,'2900528733','1415238300957347842',0,2,'2021-07-14 15:59:46','2021-07-14 15:59:46','2021-07-14 15:59:46','2021-07-14 15:59:46'),(312,'1267667511895633921','1415090782999089155',18,0,'2021-07-14 15:59:47','2021-07-14 15:59:47','2021-07-14 15:59:47','2021-07-14 15:59:47'),(313,'176269387','1405151412493901824',42,0,'2021-07-14 15:59:49','2021-07-14 15:59:49','2021-07-14 15:59:49','2021-07-14 15:59:49'),(314,'58538668','1415073439233216513',22,129,'2021-07-14 15:59:50','2021-07-14 15:59:50','2021-07-14 15:59:50','2021-07-14 15:59:50'),(315,'626138471','1415028415015628804',2,5,'2021-07-14 15:59:52','2021-07-14 15:59:52','2021-07-14 15:59:52','2021-07-14 15:59:52'),(316,'55152459','1415280425094819843',0,0,'2021-07-14 15:59:53','2021-07-14 15:59:53','2021-07-14 15:59:53','2021-07-14 15:59:53'),(317,'3294107902','1415128014204067840',698,0,'2021-07-14 15:59:55','2021-07-14 15:59:55','2021-07-14 15:59:55','2021-07-14 15:59:55'),(318,'33014349','1413848037122838538',1,0,'2021-07-14 15:59:56','2021-07-14 15:59:56','2021-07-14 15:59:56','2021-07-14 15:59:56'),(319,'3084916883','1415290254437896192',0,0,'2021-07-14 15:59:58','2021-07-14 15:59:58','2021-07-14 15:59:58','2021-07-14 15:59:58'),(320,'153563550','1415296768607145984',11,0,'2021-07-14 15:59:59','2021-07-14 15:59:59','2021-07-14 15:59:59','2021-07-14 15:59:59'),(321,'218355933','1415300072447823873',2,0,'2021-07-14 16:00:01','2021-07-14 16:00:01','2021-07-14 16:00:01','2021-07-14 16:00:01'),(322,'256661112','1414693914397847552',0,2,'2021-07-14 16:00:04','2021-07-14 16:00:04','2021-07-14 16:00:04','2021-07-14 16:00:04'),(323,'823535524610797569','1414705695048536065',105,0,'2021-07-14 16:00:06','2021-07-14 16:00:06','2021-07-14 16:00:06','2021-07-14 16:00:06'),(324,'292023005','1413674792859979776',0,3,'2021-07-14 16:00:07','2021-07-14 16:00:07','2021-07-14 16:00:07','2021-07-14 16:00:07'),(325,'98934540','1413560817837125638',0,0,'2021-07-14 16:00:08','2021-07-14 16:00:08','2021-07-14 16:00:08','2021-07-14 16:00:08'),(326,'149115340','1414690482832150531',17179,0,'2021-07-14 16:00:10','2021-07-14 16:00:10','2021-07-14 16:00:10','2021-07-14 16:00:10'),(327,'54627754','1415310984324034562',1,1,'2021-07-14 16:00:11','2021-07-14 16:00:11','2021-07-14 16:00:11','2021-07-14 16:00:11'),(328,'1226849278087352320','1415315623454859270',0,0,'2021-07-14 16:00:13','2021-07-14 16:00:13','2021-07-14 16:00:13','2021-07-14 16:00:13'),(329,'46927498','1415256265501167619',1,2,'2021-07-14 16:00:14','2021-07-14 16:00:14','2021-07-14 16:00:14','2021-07-14 16:00:14'),(330,'44251759','1415278160934064128',0,0,'2021-07-14 16:00:16','2021-07-14 16:00:16','2021-07-14 16:00:16','2021-07-14 16:00:16'),(331,'60053376','1411921602871185413',0,0,'2021-07-14 16:00:17','2021-07-14 16:00:17','2021-07-14 16:00:17','2021-07-14 16:00:17'),(332,'24761253','1415266790909911041',0,2,'2021-07-14 16:00:20','2021-07-14 16:00:20','2021-07-14 16:00:20','2021-07-14 16:00:20'),(333,'116751115','1415297901685874688',1,0,'2021-07-14 16:00:20','2021-07-14 16:00:20','2021-07-14 16:00:20','2021-07-14 16:00:20'),(334,'794866608','1403811862165311488',7,11,'2021-07-14 16:00:22','2021-07-14 16:00:22','2021-07-14 16:00:22','2021-07-14 16:00:22'),(335,'2583179096','1415295340828315649',0,2,'2021-07-14 16:00:23','2021-07-14 16:00:23','2021-07-14 16:00:23','2021-07-14 16:00:23'),(336,'1093329310579154944','1193989163961536512',0,2,'2021-07-14 16:00:25','2021-07-14 16:00:25','2021-07-14 16:00:25','2021-07-14 16:00:25'),(337,'1025103133981257728','1323326698507636736',0,0,'2021-07-14 16:00:26','2021-07-14 16:00:26','2021-07-14 16:00:26','2021-07-14 16:00:26'),(338,'2773697022','516965542134317056',0,1,'2021-07-14 16:00:28','2021-07-14 16:00:28','2021-07-14 16:00:28','2021-07-14 16:00:28'),(339,'1909765362','1394790918146887682',4,0,'2021-07-14 16:00:29','2021-07-14 16:00:29','2021-07-14 16:00:29','2021-07-14 16:00:29'),(340,'1086232379482689536','1415306252213702660',1,0,'2021-07-14 16:00:31','2021-07-14 16:00:31','2021-07-14 16:00:31','2021-07-14 16:00:31'),(341,'1118481835376431104','1415304146689957891',0,0,'2021-07-14 16:00:32','2021-07-14 16:00:32','2021-07-14 16:00:32','2021-07-14 16:00:32'),(342,'1095733666003800064','1414581160789823492',0,1,'2021-07-14 16:00:34','2021-07-14 16:00:34','2021-07-14 16:00:34','2021-07-14 16:00:34'),(343,'632737286','1414538991047741441',0,0,'2021-07-14 16:00:35','2021-07-14 16:00:35','2021-07-14 16:00:35','2021-07-14 16:00:35'),(344,'1095138301844033537','1414975148155883523',0,0,'2021-07-14 16:00:37','2021-07-14 16:00:37','2021-07-14 16:00:37','2021-07-14 16:00:37'),(345,'63508635','1415301478051426304',3,0,'2021-07-14 16:00:38','2021-07-14 16:00:38','2021-07-14 16:00:38','2021-07-14 16:00:38'),(346,'2793462577','1404819072479543296',1,0,'2021-07-14 16:00:40','2021-07-14 16:00:40','2021-07-14 16:00:40','2021-07-14 16:00:40'),(347,'231407772','1346593055034519552',3,0,'2021-07-14 16:00:42','2021-07-14 16:00:42','2021-07-14 16:00:42','2021-07-14 16:00:42'),(348,'167968053','25060169171',0,0,'2021-07-14 16:00:43','2021-07-14 16:00:43','2021-07-14 16:00:43','2021-07-14 16:00:43'),(349,'1177021738053525504','1414684029887078409',2,3,'2021-07-14 16:00:44','2021-07-14 16:00:44','2021-07-14 16:00:44','2021-07-14 16:00:44'),(350,'795228290','300133869787705344',1,0,'2021-07-14 16:00:46','2021-07-14 16:00:46','2021-07-14 16:00:46','2021-07-14 16:00:46'),(351,'583377940','1412235491152433154',1,39,'2021-07-14 16:00:47','2021-07-14 16:00:47','2021-07-14 16:00:47','2021-07-14 16:00:47'),(352,'2317252641','1414923376297140230',1,0,'2021-07-14 16:00:49','2021-07-14 16:00:49','2021-07-14 16:00:49','2021-07-14 16:00:49'),(353,'179147542','393503201372041216',0,3,'2021-07-14 16:00:50','2021-07-14 16:00:50','2021-07-14 16:00:50','2021-07-14 16:00:50'),(354,'323263308','1415314260016734208',1,0,'2021-07-14 16:00:52','2021-07-14 16:00:52','2021-07-14 16:00:52','2021-07-14 16:00:52'),(355,'140480459','1415326018504638467',0,0,'2021-07-14 16:00:55','2021-07-14 16:00:55','2021-07-14 16:00:55','2021-07-14 16:00:55'),(356,'1576755078','1415333981839572993',1,0,'2021-07-14 16:00:56','2021-07-14 16:00:56','2021-07-14 16:00:56','2021-07-14 16:00:56'),(357,'2654800357','1415337764426498049',0,3,'2021-07-14 16:00:58','2021-07-14 16:00:58','2021-07-14 16:00:58','2021-07-14 16:00:58'),(358,'3254270357','1356325339681710082',0,7,'2021-07-14 16:00:59','2021-07-14 16:00:59','2021-07-14 16:00:59','2021-07-14 16:00:59'),(359,'137548563','1415332408551936007',2,10,'2021-07-14 16:01:01','2021-07-14 16:01:01','2021-07-14 16:01:01','2021-07-14 16:01:01'),(360,'3092387621','1057803224026177536',0,8,'2021-07-14 16:01:02','2021-07-14 16:01:02','2021-07-14 16:01:02','2021-07-14 16:01:02'),(361,'1113965533542719488','1414946773915811843',0,1,'2021-07-14 16:01:04','2021-07-14 16:01:04','2021-07-14 16:01:04','2021-07-14 16:01:04'),(362,'25311569','1413418938961219584',1,2,'2021-07-14 16:01:06','2021-07-14 16:01:06','2021-07-14 16:01:06','2021-07-14 16:01:06'),(363,'163165805','1415113233539772423',0,0,'2021-07-14 16:01:07','2021-07-14 16:01:07','2021-07-14 16:01:07','2021-07-14 16:01:07'),(364,'97445850','1413600452428673034',0,1,'2021-07-14 16:01:09','2021-07-14 16:01:09','2021-07-14 16:01:09','2021-07-14 16:01:09'),(365,'1233024544270684161','1414224985393180673',0,0,'2021-07-14 16:01:10','2021-07-14 16:01:10','2021-07-14 16:01:10','2021-07-14 16:01:10'),(366,'948927124316008449','1414554999271698432',0,8,'2021-07-14 16:01:11','2021-07-14 16:01:11','2021-07-14 16:01:11','2021-07-14 16:01:11'),(367,'2970617333','1415009809800339459',0,1,'2021-07-14 16:01:14','2021-07-14 16:01:14','2021-07-14 16:01:14','2021-07-14 16:01:14'),(368,'48122425','1415267917982314500',37,0,'2021-07-14 16:01:16','2021-07-14 16:01:16','2021-07-14 16:01:16','2021-07-14 16:01:16'),(369,'1063411413845241856','1414638758356467717',0,1,'2021-07-14 16:01:17','2021-07-14 16:01:17','2021-07-14 16:01:17','2021-07-14 16:01:17'),(370,'1067790946090315776','1415106838228504585',1,4,'2021-07-14 16:01:19','2021-07-14 16:01:19','2021-07-14 16:01:19','2021-07-14 16:01:19'),(371,'1350454263386959872','1411367407365627904',7,0,'2021-07-14 16:01:20','2021-07-14 16:01:20','2021-07-14 16:01:20','2021-07-14 16:01:20'),(372,'1104120809482866688','1415277216368402433',0,0,'2021-07-14 16:01:22','2021-07-14 16:01:22','2021-07-14 16:01:22','2021-07-14 16:01:22'),(373,'1325494376','1415052624148189185',2,2,'2021-07-14 16:01:23','2021-07-14 16:01:23','2021-07-14 16:01:23','2021-07-14 16:01:23'),(374,'25577585','1415265896352866311',11,0,'2021-07-14 16:01:25','2021-07-14 16:01:25','2021-07-14 16:01:25','2021-07-14 16:01:25'),(375,'74849428','1415101952011145222',0,2,'2021-07-14 16:01:26','2021-07-14 16:01:26','2021-07-14 16:01:26','2021-07-14 16:01:26'),(376,'176832003','1325554603207876615',1,13,'2021-07-14 16:01:28','2021-07-14 16:01:28','2021-07-14 16:01:28','2021-07-14 16:01:28'),(377,'71882668','1415086571716497416',1,98,'2021-07-14 16:01:29','2021-07-14 16:01:29','2021-07-14 16:01:29','2021-07-14 16:01:29'),(378,'78714361','1415249279254474762',5,0,'2021-07-14 16:01:31','2021-07-14 16:01:31','2021-07-14 16:01:31','2021-07-14 16:01:31'),(379,'139194124','1413483744430755843',1,0,'2021-07-14 16:01:32','2021-07-14 16:01:32','2021-07-14 16:01:32','2021-07-14 16:01:32'),(380,'863587335757336585','1415018742589820938',0,1,'2021-07-14 16:01:34','2021-07-14 16:01:34','2021-07-14 16:01:34','2021-07-14 16:01:34'),(381,'57906445','1415322889272844292',1,13,'2021-07-14 16:01:35','2021-07-14 16:01:35','2021-07-14 16:01:35','2021-07-14 16:01:35'),(382,'717744189774151680','1413300707881635848',2,61,'2021-07-14 16:01:37','2021-07-14 16:01:37','2021-07-14 16:01:37','2021-07-14 16:01:37'),(383,'140669124','1413634332175052800',30,0,'2021-07-14 16:01:38','2021-07-14 16:01:38','2021-07-14 16:01:38','2021-07-14 16:01:38'),(384,'429751053','1412396559782879235',1,8,'2021-07-14 16:01:40','2021-07-14 16:01:40','2021-07-14 16:01:40','2021-07-14 16:01:40'),(385,'164696186','1415298128283058182',1,1,'2021-07-14 16:01:41','2021-07-14 16:01:41','2021-07-14 16:01:41','2021-07-14 16:01:41'),(386,'179650596','1415272630517698561',11,0,'2021-07-14 16:01:43','2021-07-14 16:01:43','2021-07-14 16:01:43','2021-07-14 16:01:43'),(387,'264391266','1415264533829017603',37,0,'2021-07-14 16:01:44','2021-07-14 16:01:44','2021-07-14 16:01:44','2021-07-14 16:01:44'),(388,'48515258','1415296214556368897',1,0,'2021-07-14 16:01:46','2021-07-14 16:01:46','2021-07-14 16:01:46','2021-07-14 16:01:46'),(389,'3181396187','1415324710607495169',2,7,'2021-07-14 16:01:47','2021-07-14 16:01:47','2021-07-14 16:01:47','2021-07-14 16:01:47'),(390,'2900528733','1415238300957347842',0,2,'2021-07-14 16:01:48','2021-07-14 16:01:48','2021-07-14 16:01:48','2021-07-14 16:01:48'),(391,'1267667511895633921','1415090782999089155',18,0,'2021-07-14 16:01:50','2021-07-14 16:01:50','2021-07-14 16:01:50','2021-07-14 16:01:50'),(392,'176269387','1405151412493901824',42,0,'2021-07-14 16:01:52','2021-07-14 16:01:52','2021-07-14 16:01:52','2021-07-14 16:01:52'),(393,'58538668','1415073439233216513',22,129,'2021-07-14 16:01:53','2021-07-14 16:01:53','2021-07-14 16:01:53','2021-07-14 16:01:53'),(394,'626138471','1415028415015628804',2,5,'2021-07-14 16:01:55','2021-07-14 16:01:55','2021-07-14 16:01:55','2021-07-14 16:01:55'),(395,'55152459','1415280425094819843',0,0,'2021-07-14 16:01:56','2021-07-14 16:01:56','2021-07-14 16:01:56','2021-07-14 16:01:56'),(396,'3294107902','1415128014204067840',698,0,'2021-07-14 16:01:58','2021-07-14 16:01:58','2021-07-14 16:01:58','2021-07-14 16:01:58'),(397,'33014349','1413848037122838538',1,0,'2021-07-14 16:01:59','2021-07-14 16:01:59','2021-07-14 16:01:59','2021-07-14 16:01:59'),(398,'3084916883','1415290254437896192',0,0,'2021-07-14 16:02:01','2021-07-14 16:02:01','2021-07-14 16:02:01','2021-07-14 16:02:01'),(399,'153563550','1415296768607145984',11,0,'2021-07-14 16:02:03','2021-07-14 16:02:03','2021-07-14 16:02:03','2021-07-14 16:02:03'),(400,'218355933','1415300072447823873',2,0,'2021-07-14 16:02:04','2021-07-14 16:02:04','2021-07-14 16:02:04','2021-07-14 16:02:04'),(401,'256661112','1414693914397847552',0,2,'2021-07-14 16:02:07','2021-07-14 16:02:07','2021-07-14 16:02:07','2021-07-14 16:02:07'),(402,'823535524610797569','1414705695048536065',105,0,'2021-07-14 16:02:08','2021-07-14 16:02:08','2021-07-14 16:02:08','2021-07-14 16:02:08'),(403,'292023005','1413674792859979776',0,3,'2021-07-14 16:02:10','2021-07-14 16:02:10','2021-07-14 16:02:10','2021-07-14 16:02:10'),(404,'98934540','1413560817837125638',0,0,'2021-07-14 16:02:11','2021-07-14 16:02:11','2021-07-14 16:02:11','2021-07-14 16:02:11'),(405,'149115340','1414690482832150531',17178,0,'2021-07-14 16:02:13','2021-07-14 16:02:13','2021-07-14 16:02:13','2021-07-14 16:02:13'),(406,'54627754','1415310984324034562',1,1,'2021-07-14 16:02:14','2021-07-14 16:02:14','2021-07-14 16:02:14','2021-07-14 16:02:14'),(407,'1226849278087352320','1415315623454859270',0,0,'2021-07-14 16:02:16','2021-07-14 16:02:16','2021-07-14 16:02:16','2021-07-14 16:02:16'),(408,'46927498','1415256265501167619',1,2,'2021-07-14 16:02:17','2021-07-14 16:02:17','2021-07-14 16:02:17','2021-07-14 16:02:17'),(409,'44251759','1415278160934064128',0,0,'2021-07-14 16:02:19','2021-07-14 16:02:19','2021-07-14 16:02:19','2021-07-14 16:02:19'),(410,'60053376','1411921602871185413',0,0,'2021-07-14 16:02:20','2021-07-14 16:02:20','2021-07-14 16:02:20','2021-07-14 16:02:20'),(411,'24761253','1415266790909911041',0,2,'2021-07-14 16:02:22','2021-07-14 16:02:22','2021-07-14 16:02:22','2021-07-14 16:02:22'),(412,'274679920','1415295293541789701',0,0,'2021-07-14 16:02:23','2021-07-14 16:02:23','2021-07-14 16:02:23','2021-07-14 16:02:23'),(413,'1016611112','1415020287683346434',0,0,'2021-07-14 16:02:25','2021-07-14 16:02:25','2021-07-14 16:02:25','2021-07-14 16:02:25'),(414,'169177005','1415330141119688704',0,2,'2021-07-14 16:02:26','2021-07-14 16:02:26','2021-07-14 16:02:26','2021-07-14 16:02:26'),(415,'1080814654195204096','1415336123258245123',0,22,'2021-07-14 16:02:28','2021-07-14 16:02:28','2021-07-14 16:02:28','2021-07-14 16:02:28'),(416,'211036828','1414293859157299207',1,2,'2021-07-14 16:02:29','2021-07-14 16:02:29','2021-07-14 16:02:29','2021-07-14 16:02:29'),(417,'1606503036','1415309305780260866',0,0,'2021-07-14 16:02:31','2021-07-14 16:02:31','2021-07-14 16:02:31','2021-07-14 16:02:31'),(418,'165113436','1364419193651802113',0,1,'2021-07-14 16:02:32','2021-07-14 16:02:32','2021-07-14 16:02:32','2021-07-14 16:02:32'),(419,'169739656','1415291823845777413',0,0,'2021-07-14 16:02:34','2021-07-14 16:02:34','2021-07-14 16:02:34','2021-07-14 16:02:34'),(420,'88502425','1415054211063193604',0,0,'2021-07-14 16:02:35','2021-07-14 16:02:35','2021-07-14 16:02:35','2021-07-14 16:02:35'),(421,'54223926','1415326967688224776',0,1,'2021-07-14 16:02:37','2021-07-14 16:02:37','2021-07-14 16:02:37','2021-07-14 16:02:37'),(422,'36778216','1415330391263793153',1,0,'2021-07-14 16:02:38','2021-07-14 16:02:38','2021-07-14 16:02:38','2021-07-14 16:02:38'),(423,'18888488','1415337618011734018',1,3,'2021-07-14 16:02:40','2021-07-14 16:02:40','2021-07-14 16:02:40','2021-07-14 16:02:40'),(424,'1002217423037255681','1332516811393347584',0,0,'2021-07-14 16:02:41','2021-07-14 16:02:41','2021-07-14 16:02:41','2021-07-14 16:02:41'),(425,'399115403','1415078722340851714',0,1,'2021-07-14 16:02:43','2021-07-14 16:02:43','2021-07-14 16:02:43','2021-07-14 16:02:43'),(426,'265024488','1415307400941277186',0,0,'2021-07-14 16:02:44','2021-07-14 16:02:44','2021-07-14 16:02:44','2021-07-14 16:02:44'),(427,'160537024','1367103317193740288',0,0,'2021-07-14 16:02:47','2021-07-14 16:02:47','2021-07-14 16:02:47','2021-07-14 16:02:47'),(428,'2601784207','1415333497938628612',0,1,'2021-07-14 16:02:47','2021-07-14 16:02:47','2021-07-14 16:02:47','2021-07-14 16:02:47'),(429,'1307554087','1415321162498850827',1,6,'2021-07-14 16:02:49','2021-07-14 16:02:49','2021-07-14 16:02:49','2021-07-14 16:02:49'),(430,'2209910422','1415276117917831172',0,1,'2021-07-14 16:02:50','2021-07-14 16:02:50','2021-07-14 16:02:50','2021-07-14 16:02:50'),(431,'85859074','1415287326633336841',0,4,'2021-07-14 16:02:52','2021-07-14 16:02:52','2021-07-14 16:02:52','2021-07-14 16:02:52'),(432,'106134926','1415315671043411972',143,2946,'2021-07-14 16:02:53','2021-07-14 16:02:53','2021-07-14 16:02:53','2021-07-14 16:02:53'),(433,'1436541721','1413310533508472832',18,74,'2021-07-14 16:02:55','2021-07-14 16:02:55','2021-07-14 16:02:55','2021-07-14 16:02:55'),(434,'3183992440','1415013536993054722',0,3,'2021-07-14 16:02:56','2021-07-14 16:02:56','2021-07-14 16:02:56','2021-07-14 16:02:56'),(435,'1155204531942301698','1398664713899282437',1,19,'2021-07-14 16:02:58','2021-07-14 16:02:58','2021-07-14 16:02:58','2021-07-14 16:02:58'),(436,'1351188841558913025','1414959609928896513',293,10119,'2021-07-14 16:02:59','2021-07-14 16:02:59','2021-07-14 16:02:59','2021-07-14 16:02:59'),(437,'158487331','1413980438377422854',6039,64622,'2021-07-14 16:03:01','2021-07-14 16:03:01','2021-07-14 16:03:01','2021-07-14 16:03:01'),(438,'750092719121375232','1414717473358761987',0,2,'2021-07-14 16:03:02','2021-07-14 16:03:02','2021-07-14 16:03:02','2021-07-14 16:03:02'),(439,'762402774260875265','1415279391836446722',1071,15114,'2021-07-14 16:03:04','2021-07-14 16:03:04','2021-07-14 16:03:04','2021-07-14 16:03:04'),(440,'354095556','1415063614571024390',45,430,'2021-07-14 16:03:05','2021-07-14 16:03:05','2021-07-14 16:03:05','2021-07-14 16:03:05'),(441,'1335942718040793091','1415335211508899840',0,6,'2021-07-14 16:03:07','2021-07-14 16:03:07','2021-07-14 16:03:07','2021-07-14 16:03:07'),(442,'1024403315164160000','1415071826846355461',352,1449,'2021-07-14 16:03:08','2021-07-14 16:03:08','2021-07-14 16:03:08','2021-07-14 16:03:08'),(443,'1024403315164160000','1415071826846355461',352,1449,'2021-07-14 16:03:10','2021-07-14 16:03:10','2021-07-14 16:03:10','2021-07-14 16:03:10'),(444,'1050121324436307970','1415284689166901251',95,523,'2021-07-14 16:03:11','2021-07-14 16:03:11','2021-07-14 16:03:11','2021-07-14 16:03:11'),(445,'1335942718040793091','1415335211508899840',0,6,'2021-07-14 16:03:13','2021-07-14 16:03:13','2021-07-14 16:03:13','2021-07-14 16:03:13'),(446,'2445921702','1415273959885574147',64,914,'2021-07-14 16:03:14','2021-07-14 16:03:14','2021-07-14 16:03:14','2021-07-14 16:03:14'),(447,'4250596815','1415288240110723073',378,8445,'2021-07-14 16:03:16','2021-07-14 16:03:16','2021-07-14 16:03:16','2021-07-14 16:03:16'),(448,'126436384','1415330376940150785',423,1915,'2021-07-14 16:03:17','2021-07-14 16:03:17','2021-07-14 16:03:17','2021-07-14 16:03:17'),(449,'528507920','1414985736303095811',820,8672,'2021-07-14 16:03:19','2021-07-14 16:03:19','2021-07-14 16:03:19','2021-07-14 16:03:19'),(450,'28273230','1415329867139276801',46,615,'2021-07-14 16:03:20','2021-07-14 16:03:20','2021-07-14 16:03:20','2021-07-14 16:03:20'),(451,'33374761','1415312381543124996',363,1393,'2021-07-14 16:03:22','2021-07-14 16:03:22','2021-07-14 16:03:22','2021-07-14 16:03:22'),(452,'1335942718040793091','1415335211508899840',0,6,'2021-07-14 16:03:24','2021-07-14 16:03:24','2021-07-14 16:03:24','2021-07-14 16:03:24'),(453,'1155204531942301698','1398664713899282437',1,19,'2021-07-14 16:03:25','2021-07-14 16:03:25','2021-07-14 16:03:25','2021-07-14 16:03:25'),(454,'1080814654195204096','1415336123258245123',0,22,'2021-07-14 16:03:26','2021-07-14 16:03:26','2021-07-14 16:03:26','2021-07-14 16:03:26'),(456,'2670726740','1415326190018121728',189,1310,'2021-07-14 16:19:14','2021-07-14 16:19:14','2021-07-14 16:19:14','2021-07-14 16:19:14'),(457,'25577585','1415265896352866311',11,0,'2021-07-14 16:19:17','2021-07-14 16:19:17','2021-07-14 16:19:17','2021-07-14 16:19:17'),(458,'342994346','1415319362790121477',41,168,'2021-07-14 16:19:17','2021-07-14 16:19:17','2021-07-14 16:19:17','2021-07-14 16:19:17'),(459,'1335942718040793091','1415335211508899840',0,7,'2021-07-14 16:19:18','2021-07-14 16:19:18','2021-07-14 16:19:18','2021-07-14 16:19:18'),(460,'798892388366381056','1415326113740492801',0,1,'2021-07-14 16:19:20','2021-07-14 16:19:20','2021-07-14 16:19:20','2021-07-14 16:19:20'),(461,'46927498','1415342497803427843',0,0,'2021-07-14 16:23:49','2021-07-14 16:23:49','2021-07-14 16:23:49','2021-07-14 16:23:49'),(462,'54223926','1415342600031244290',0,0,'2021-07-14 16:26:12','2021-07-14 16:26:12','2021-07-14 16:26:12','2021-07-14 16:26:12'),(463,'2601784207','1415343971195408390',0,0,'2021-07-14 16:26:22','2021-07-14 16:26:22','2021-07-14 16:26:22','2021-07-14 16:26:22'),(464,'85859074','1415342391700168717',0,1,'2021-07-14 16:26:27','2021-07-14 16:26:27','2021-07-14 16:26:27','2021-07-14 16:26:27'),(465,'762402774260875265','1415342933298008077',216,7722,'2021-07-14 16:26:39','2021-07-14 16:26:39','2021-07-14 16:26:39','2021-07-14 16:26:39');
/*!40000 ALTER TABLE `engagements` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-27 15:14:21
