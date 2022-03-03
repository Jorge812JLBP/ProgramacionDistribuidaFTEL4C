/*
 Navicat Premium Data Transfer
 Source Server         : Local_DB
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : telematica4c
 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001
 Date: 02/03/2022 08:43:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for prueba
-- ----------------------------
DROP TABLE IF EXISTS `prueba`;
CREATE TABLE `prueba`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `val` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gety` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of prueba
-- ----------------------------
INSERT INTO `prueba` VALUES (1, 'raiz', NULL);
INSERT INTO `prueba` VALUES (2, '1646158562240', 'raiz');
INSERT INTO `prueba` VALUES (3, '1646158660514', 'add');
INSERT INTO `prueba` VALUES (4, '1646158675697', 'raiz');

SET FOREIGN_KEY_CHECKS = 1;