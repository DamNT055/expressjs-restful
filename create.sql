-- Active: 1702871541790@@127.0.0.1@3307@node_tb
SHOW DATABASES;
CREATE DATABASE IF NOT EXISTS node_tb;
USE node_tb;

CREATE TABLE `products` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) DEFAULT '',
    `color` VARCHAR(255) DEFAULT '',
    `price` DECIMAL(10,2) DEFAULT '0.00',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

INSERT INTO `products` (`name`, `color`, `price`) VALUES     
    ('Product A', 'Red', 10.99),
    ('Product B', 'Blue', 15.99),
    ('Product C', 'Green', 8.99);

