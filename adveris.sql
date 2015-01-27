-- phpMyAdmin SQL Dump
-- version 3.4.11.1deb2+deb7u1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Mar 27 Janvier 2015 à 02:14
-- Version du serveur: 5.5.40
-- Version de PHP: 5.4.36-1~dotdeb.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `cakephp`
--

-- --------------------------------------------------------

--
-- Structure de la table `content`
--

CREATE TABLE IF NOT EXISTS `content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `update_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `content`
--

INSERT INTO `content` (`id`, `user_id`, `title`, `content`, `update_date`) VALUES
(6, 0, 'Titre du contenu administrable', '<p><strong>Le meilleur moyen de gagner du temps</strong><br />\r\nUtilisez les infrastructures de notre R&eacute;seau :<br />\r\n<br />\r\n<strong>Location de bureaux et domiciliation</strong>&nbsp;<br />\r\nNos centres d&#39;affaires sont pr&eacute;sents sur 31 villes en France (Paris, Lyon, Toulouse, Nantes, Grenoble, etc.) et offrent des prestations de domiciliation, de location de bureaux, de secr&eacute;tariat et d&rsquo;accueil t&eacute;l&eacute;phonique.&nbsp;<br />\r\n<br />\r\n<strong>Cliquer sur le marqueur de&nbsp;la ville choisie pour envoyer un email de renseignement</strong></p>\r\n', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(20) DEFAULT 'admin',
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `created`, `modified`) VALUES
(3, 'adveris', '530650f96c9546887bcee26db983e0f77db4ce5e', 'admin', '2015-01-27 00:05:18', '2015-01-27 00:05:18');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
