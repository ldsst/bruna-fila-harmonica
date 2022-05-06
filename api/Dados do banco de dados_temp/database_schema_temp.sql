-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS,
  UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS,
  FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE,
  SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema filarmonica_hmg
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema filarmonica_hmg
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `filarmonica_hmg` DEFAULT CHARACTER SET utf8;
USE `filarmonica_hmg`;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`compositor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`compositor` (
  `idCompositor` INT NOT NULL AUTO_INCREMENT,
  `nomeCompleto` VARCHAR(100) NOT NULL,
  `nomeAbreviado` VARCHAR(100) NOT NULL,
  `sexo` VARCHAR(15) NULL DEFAULT NULL,
  `anoNascimento` VARCHAR(45) NULL DEFAULT NULL,
  `anoMorte` VARCHAR(45) NULL DEFAULT NULL,
  `nacionalidade` VARCHAR(100) NULL DEFAULT NULL,
  `localNascimento` VARCHAR(100) NULL DEFAULT NULL,
  `localMorte` VARCHAR(100) NULL DEFAULT NULL,
  `observacoes` VARCHAR(200) NULL DEFAULT NULL,
  `efemerides` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idCompositor`)
) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`programa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`programa` (
  `idPrograma` INT NOT NULL AUTO_INCREMENT,
  `idCompositor` INT NOT NULL,
  `nomePrograma` VARCHAR(100) NOT NULL,
  `efemeridesObra` VARCHAR(100) NULL DEFAULT NULL,
  `observacoes` VARCHAR(300) NULL DEFAULT NULL,
  `efemeridesCompositor` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idPrograma`),
  INDEX `fk_programa_compositor1_idx` (`idCompositor` ASC) VISIBLE,
  CONSTRAINT `fk_programa_compositor1` FOREIGN KEY (`idCompositor`) REFERENCES `filarmonica_hmg`.`compositor` (`idCompositor`)
) ENGINE = InnoDB AUTO_INCREMENT = 26 DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`concerto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`concerto` (
  `idConcerto` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL DEFAULT NULL,
  `dataInicio` DATE NULL DEFAULT NULL,
  `dataFim` DATE NULL DEFAULT NULL,
  `serie` VARCHAR(100) NULL DEFAULT NULL,
  `numero` INT NULL DEFAULT NULL,
  `traje` VARCHAR(45) NULL DEFAULT NULL,
  `observacoes` VARCHAR(200) NULL DEFAULT NULL,
  `idPrograma` INT NOT NULL,
  `editora` VARCHAR(45) NULL DEFAULT NULL,
  `horario` TIME NULL DEFAULT NULL,
  `transmissaoOuGravacao` VARCHAR(5) NULL DEFAULT NULL,
  `legenda` VARCHAR(45) NULL DEFAULT NULL,
  `instrumentacaoMaior` VARCHAR(150) NULL DEFAULT NULL,
  `local` VARCHAR(100) NULL DEFAULT NULL,
  `cidade` VARCHAR(100) NULL DEFAULT NULL,
  `transmissaoEhGratuita` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`idConcerto`),
  INDEX `fk_Concerto_Programa1_idx` (`idPrograma` ASC) VISIBLE,
  CONSTRAINT `fk_Concerto_Programa1` FOREIGN KEY (`idPrograma`) REFERENCES `filarmonica_hmg`.`programa` (`idPrograma`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`ensaio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`ensaio` (
  `idEnsaio` INT NOT NULL AUTO_INCREMENT,
  `dataEnsaio` DATE NOT NULL,
  `horaInicio` TIME NOT NULL,
  `duracao` VARCHAR(45) NULL DEFAULT NULL,
  `tipo` VARCHAR(45) NULL DEFAULT NULL,
  `ordemEnsaio` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`idEnsaio`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`concerto_has_ensaio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`concerto_has_ensaio` (
  `idConcerto` INT NOT NULL,
  `idEnsaio` INT NOT NULL,
  PRIMARY KEY (`idConcerto`, `idEnsaio`),
  INDEX `fk_concerto_has_ensaio_ensaio1_idx` (`idEnsaio` ASC) VISIBLE,
  INDEX `fk_concerto_has_ensaio_concerto1_idx` (`idConcerto` ASC) VISIBLE,
  CONSTRAINT `fk_concerto_has_ensaio_concerto1` FOREIGN KEY (`idConcerto`) REFERENCES `filarmonica_hmg`.`concerto` (`idConcerto`) ON DELETE CASCADE,
  CONSTRAINT `fk_concerto_has_ensaio_ensaio1` FOREIGN KEY (`idEnsaio`) REFERENCES `filarmonica_hmg`.`ensaio` (`idEnsaio`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`convidado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`convidado` (
  `idConvidado` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `instrumento` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `dataNascimento` DATE NULL DEFAULT NULL,
  `localNascimento` VARCHAR(100) NULL DEFAULT NULL,
  `nacionalidade` VARCHAR(100) NULL DEFAULT NULL,
  `sexo` VARCHAR(15) NULL DEFAULT NULL,
  `isRegente` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`idConvidado`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`historico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`Historico` (
  `idHistorico` INT NOT NULL AUTO_INCREMENT,
  `compositor` VARCHAR(100) NULL DEFAULT NULL,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `obra` VARCHAR(150) NULL,
  `dataInicio` DATE NULL DEFAULT NULL,
  `dataFim` DATE NULL DEFAULT NULL,
  `serie` VARCHAR(100) NULL DEFAULT NULL,
  `regente` VARCHAR(100) NULL DEFAULT NULL,
  `solista` VARCHAR(100) NULL DEFAULT NULL,
  `cidade` VARCHAR(100) NULL DEFAULT NULL,
  `local` VARCHAR(100) NULL DEFAULT NULL,
  `arranjador` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idHistorico`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`obra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`obra` (
  `idObra` INT NOT NULL AUTO_INCREMENT,
  `nomeObra` VARCHAR(100) NOT NULL,
  `anoPeriodoComposicao` VARCHAR(45) NULL DEFAULT NULL,
  `duracao` VARCHAR(45) NOT NULL,
  `detalhesObra` VARCHAR(300) NULL DEFAULT NULL,
  `efemerides` VARCHAR(300) NULL DEFAULT NULL,
  `movimentos` VARCHAR(300) NULL DEFAULT NULL,
  `qtdMovimentos` INT NULL DEFAULT NULL,
  `observacoes` VARCHAR(300) NULL DEFAULT NULL,
  `instrumentacaoExtenso` VARCHAR(300) NULL DEFAULT NULL,
  `instrumentacaoCodificada` VARCHAR(300) NULL DEFAULT NULL,
  `idCompositor` INT NOT NULL,
  `arranjador` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idObra`),
  INDEX `fk_obra_compositor1_idx` (`idCompositor` ASC) VISIBLE,
  CONSTRAINT `fk_obra_compositor1` FOREIGN KEY (`idCompositor`) REFERENCES `filarmonica_hmg`.`compositor` (`idCompositor`)
) ENGINE = InnoDB AUTO_INCREMENT = 21 DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`partitura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`Partitura` (
  `idPartitura` INT NOT NULL AUTO_INCREMENT,
  `numeroTombo` VARCHAR(100) NOT NULL,
  `compositor` VARCHAR(60) NOT NULL,
  `nomeObra` VARCHAR(60) NOT NULL,
  `editoraPartitura` VARCHAR(45) NULL DEFAULT NULL,
  `duracao` VARCHAR(45) NULL DEFAULT NULL,
  `instrumentacao` VARCHAR(300) NULL DEFAULT NULL,
  `movimentos` VARCHAR(100) NULL DEFAULT NULL,
  `historicoObra` VARCHAR(300) NULL DEFAULT NULL,
  `observacoes` VARCHAR(300) NULL DEFAULT NULL,
  PRIMARY KEY (`idPartitura`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`planotemporada`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`planotemporada` (
  `idPlanoTemporada` INT NOT NULL AUTO_INCREMENT,
  `anoTemporada` INT NOT NULL,
  `nomeTemporada` VARCHAR(45) NOT NULL,
  `observacoes` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idPlanoTemporada`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`planotemporada_has_concerto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`planotemporada_has_concerto` (
  `idPlanoTemporada` INT NOT NULL,
  `idConcerto` INT NOT NULL,
  PRIMARY KEY (`idPlanoTemporada`, `idConcerto`),
  INDEX `fk_planotemporada_has_concerto_concerto1_idx` (`idConcerto` ASC) VISIBLE,
  INDEX `fk_planotemporada_has_concerto_planotemporada1_idx` (`idPlanoTemporada` ASC) VISIBLE,
  CONSTRAINT `fk_planotemporada_has_concerto_concerto1` FOREIGN KEY (`idConcerto`) REFERENCES `filarmonica_hmg`.`concerto` (`idConcerto`) ON DELETE CASCADE,
  CONSTRAINT `fk_planotemporada_has_concerto_planotemporada1` FOREIGN KEY (`idPlanoTemporada`) REFERENCES `filarmonica_hmg`.`planotemporada` (`idPlanoTemporada`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`programa_has_obra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`programa_has_obra` (
  `idPrograma` INT NOT NULL,
  `idObra` INT NOT NULL,
  PRIMARY KEY (`idPrograma`, `idObra`),
  INDEX `fk_programa_has_obra_obra1_idx` (`idObra` ASC) VISIBLE,
  INDEX `fk_programa_has_obra_programa1_idx` (`idPrograma` ASC) VISIBLE,
  CONSTRAINT `fk_programa_has_obra_obra1` FOREIGN KEY (`idObra`) REFERENCES `filarmonica_hmg`.`obra` (`idObra`) ON DELETE CASCADE,
  CONSTRAINT `fk_programa_has_obra_programa1` FOREIGN KEY (`idPrograma`) REFERENCES `filarmonica_hmg`.`programa` (`idPrograma`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `senha` VARCHAR(500) NOT NULL,
  `nomeCompleto` VARCHAR(60) NOT NULL,
  `nivelPermissao` VARCHAR(15) NULL DEFAULT NULL,
  `email` VARCHAR(45) NOT NULL,
  `canEdit` TINYINT NULL DEFAULT NULL,
  `instrumento` VARCHAR(45) NULL DEFAULT NULL,
  `cargo` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`Musicista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`Musicista` (
  `idMusicista` INT NOT NULL,
  `nome` VARCHAR(150) NULL,
  `instrumento` VARCHAR(100) NULL,
  PRIMARY KEY (`idMusicista`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`concerto_has_Musicista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`concerto_has_Musicista` (
  `concerto_idConcerto` INT NOT NULL,
  `Musicista_idMusicista` INT NULL,
  INDEX `fk_concerto_has_Musicista_Musicista1_idx` (`Musicista_idMusicista` ASC) VISIBLE,
  INDEX `fk_concerto_has_Musicista_concerto1_idx` (`concerto_idConcerto` ASC) VISIBLE,
  UNIQUE INDEX `Musicista_idMusicista_UNIQUE` (`Musicista_idMusicista` ASC) VISIBLE,
  PRIMARY KEY (`concerto_idConcerto`),
  CONSTRAINT `fk_concerto_has_Musicista_concerto1` FOREIGN KEY (`concerto_idConcerto`) REFERENCES `filarmonica_hmg`.`concerto` (`idConcerto`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_concerto_has_Musicista_Musicista1` FOREIGN KEY (`Musicista_idMusicista`) REFERENCES `filarmonica_hmg`.`Musicista` (`idMusicista`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;
-- -----------------------------------------------------
-- Table `filarmonica_hmg`.`concerto_has_convidado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `filarmonica_hmg`.`concerto_has_convidado` (
  `concerto_idConcerto` INT NOT NULL,
  `convidado_idConvidado` INT NULL,
  PRIMARY KEY (`concerto_idConcerto`),
  INDEX `fk_concerto_has_convidado_convidado1_idx` (`convidado_idConvidado` ASC) VISIBLE,
  INDEX `fk_concerto_has_convidado_concerto1_idx` (`concerto_idConcerto` ASC) VISIBLE,
  UNIQUE INDEX `convidado_idConvidado_UNIQUE` (`convidado_idConvidado` ASC) VISIBLE,
  CONSTRAINT `fk_concerto_has_convidado_concerto1` FOREIGN KEY (`concerto_idConcerto`) REFERENCES `filarmonica_hmg`.`concerto` (`idConcerto`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_concerto_has_convidado_convidado1` FOREIGN KEY (`convidado_idConvidado`) REFERENCES `filarmonica_hmg`.`convidado` (`idConvidado`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb3;
SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;