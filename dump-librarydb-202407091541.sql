-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: librarydb
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('6a2f6c61-cfcf-4e51-ad31-d03f5c21b97b','266b5a1f39f213d40fdefb598837e101aaa35e90b96787a47dbaea94393d98e2','2024-07-09 04:26:04.087','20240708085107_init',NULL,NULL,'2024-07-09 04:26:03.818',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `imageUrl` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES ('0a0a8c99-bebe-4153-ae12-32592687a5e2','To Kill a Mockingbird1','Harper Lee',5,'2024-07-09 04:57:25.919','2024-07-09 08:19:55.165','bc16c33d966a63fe2ae103f63dd749c21.jpeg'),('30017932-5a8b-4161-92f5-60a52ba4d9be','To Kill a Mockingbird123','Harper Lee',5,'2024-07-09 05:40:15.233','2024-07-09 05:40:15.233',NULL),('3f84281b-8461-436a-82bd-df5889556fdb','To Kill a Mockingbird','Harper Lee',5,'2024-07-09 04:57:21.083','2024-07-09 04:57:21.083',NULL),('5ea21dbf-f142-40a3-a874-66e3b4466c16','To Kill a Mockingbird12','Harper Lee',5,'2024-07-09 04:57:28.751','2024-07-09 04:57:28.751',NULL),('d734afdb-07c7-4d8d-b7eb-a147d37b7ae2','To Kill a Mockingbird123','Harper Lee',5,'2024-07-09 04:57:31.677','2024-07-09 04:57:31.677',NULL);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `borrowtransaction`
--

DROP TABLE IF EXISTS `borrowtransaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `borrowtransaction` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bookId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `borrowDate` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `BorrowTransaction_bookId_fkey` (`bookId`),
  KEY `BorrowTransaction_userId_fkey` (`userId`),
  CONSTRAINT `BorrowTransaction_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `book` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `BorrowTransaction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `borrowtransaction`
--

LOCK TABLES `borrowtransaction` WRITE;
/*!40000 ALTER TABLE `borrowtransaction` DISABLE KEYS */;
INSERT INTO `borrowtransaction` VALUES ('16f88e00-9501-40db-ae0c-73790d68455a','0a0a8c99-bebe-4153-ae12-32592687a5e2','7cee11b4-8c02-44e2-a5f6-c1f4d749e7ca','2024-07-09 08:15:19.544'),('665961b0-cc0e-458b-b031-07476de79fd2','0a0a8c99-bebe-4153-ae12-32592687a5e2','7cee11b4-8c02-44e2-a5f6-c1f4d749e7ca','2024-07-09 08:18:28.428'),('858a5cb9-078d-4ae4-b612-7538d7c9197f','0a0a8c99-bebe-4153-ae12-32592687a5e2','7cee11b4-8c02-44e2-a5f6-c1f4d749e7ca','2024-07-09 08:18:27.004'),('bed29a2b-0c5c-4ac0-8dd9-2b9963fc9e0d','0a0a8c99-bebe-4153-ae12-32592687a5e2','7cee11b4-8c02-44e2-a5f6-c1f4d749e7ca','2024-07-09 08:15:24.976'),('e9a726f2-7de2-48b0-a3e8-5f3d2bd59964','0a0a8c99-bebe-4153-ae12-32592687a5e2','7cee11b4-8c02-44e2-a5f6-c1f4d749e7ca','2024-07-09 08:15:24.229');
/*!40000 ALTER TABLE `borrowtransaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `returntransaction`
--

DROP TABLE IF EXISTS `returntransaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `returntransaction` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `borrowId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `returnDate` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `ReturnTransaction_borrowId_fkey` (`borrowId`),
  CONSTRAINT `ReturnTransaction_borrowId_fkey` FOREIGN KEY (`borrowId`) REFERENCES `borrowtransaction` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `returntransaction`
--

LOCK TABLES `returntransaction` WRITE;
/*!40000 ALTER TABLE `returntransaction` DISABLE KEYS */;
INSERT INTO `returntransaction` VALUES ('28479773-79d8-414e-8490-4c0c6883344f','16f88e00-9501-40db-ae0c-73790d68455a','2024-07-09 08:18:54.307'),('4cc1a7ec-db6d-4642-a9f5-2db3b297a3d4','16f88e00-9501-40db-ae0c-73790d68455a','2024-07-09 08:18:55.003'),('73e58af1-768f-409e-9efa-67c458121d1a','16f88e00-9501-40db-ae0c-73790d68455a','2024-07-09 08:16:24.129'),('8cbc95b3-0d40-400e-b731-042967d5e7e3','16f88e00-9501-40db-ae0c-73790d68455a','2024-07-09 08:16:25.023'),('a0dedc99-079a-4011-a17b-9e0da95f7f2b','16f88e00-9501-40db-ae0c-73790d68455a','2024-07-09 08:16:25.808');
/*!40000 ALTER TABLE `returntransaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `imageUrl` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('7cee11b4-8c02-44e2-a5f6-c1f4d749e7ca','arif2343','arif2@gmail.com','2024-07-09 08:11:39.680','2024-07-09 08:13:29.828','5921643b3c936bb518d8f2efbb732567.jpeg'),('d0f4e050-d91d-47e2-8679-8e4e3060b7d4','mario','inimario2@gmail.com','2024-07-09 08:20:37.464','2024-07-09 08:20:51.521','87c2fc53f5410d96b521050552a790ce41.jpeg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'librarydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-09 15:41:18
