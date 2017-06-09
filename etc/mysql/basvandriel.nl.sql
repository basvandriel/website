# Set the users, create the database, import all other sql files for it
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema basvandriel.nl
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `basvandriel.nl`;

-- -----------------------------------------------------
-- Schema basvandriel.nl
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `basvandriel.nl`
  DEFAULT CHARACTER SET utf8;
USE `basvandriel.nl`;

-- -----------------------------------------------------
-- Table `visitor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `visitor`;

CREATE TABLE IF NOT EXISTS `visitor` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `visitor_ip_addresses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `visitor_ip_addresses`;

CREATE TABLE IF NOT EXISTS `visitor_ip_addresses` (
  `id`         INT          NOT NULL,
  `ip_address` INT(11)      NULL,
  `visitor_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_visitor_ip_addresses_visitor`
  FOREIGN KEY (`visitor_id`)
  REFERENCES `visitor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
  ENGINE = InnoDB;

CREATE INDEX `fk_visitor_ip_addresses_visitor_idx`
  ON `visitor_ip_addresses` (`visitor_id` ASC);


SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;
