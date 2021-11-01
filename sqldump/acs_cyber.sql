-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2019 at 04:19 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `acs_cyber`
--
CREATE DATABASE IF NOT EXISTS `acs_cyber` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `acs_cyber`;

-- --------------------------------------------------------

--
-- Table structure for table `exploit_used`
--

CREATE TABLE `exploit_used` (
  `Number` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `Role` varchar(10) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `exploit` varchar(20) DEFAULT NULL,
  `System` varchar(8) DEFAULT NULL,
  `score` int(11) NOT NULL,
  `winner` varchar(10) NOT NULL,
  `honeypot` varchar(20) NOT NULL DEFAULT 'none',
  `gamenumber` int(11) NOT NULL,
  `gametype` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `exploit_used`
--

INSERT INTO `exploit_used` (`Number`, `userID`, `Role`, `username`, `exploit`, `System`, `score`, `winner`, `honeypot`, `gamenumber`, `gametype`) VALUES
(52, 11, 'Hacker', 'Riyansh', 'drown_attack', 'System1', 0, 'incomplete', 'none', 0, 'Early Deception'),
(53, 11, 'Hacker', 'Riyansh', 'DNS_zone_transfer', 'System20', 100, 'hacker', 'none', 1, 'Early Deception'),
(55, 11, 'Hacker', 'Riyansh', 'DDoS_attack', 'System5', -100, 'defender', '15,5,21,30,13,9,2,6,', 2, 'Early Deception'),
(56, 11, 'Hacker', 'Riyansh', 'sql_injection', 'System40', -100, 'defender', '25,33,10,6,36,31,8,1', 3, 'Early Deception'),
(57, 11, 'Hacker', 'Riyansh', 'pop3_version', 'System40', 100, 'hacker', 'none', 4, 'Early Deception'),
(58, 11, 'Hacker', 'Riyansh', 'remote_auth', 'System30', 100, 'hacker', 'none', 5, 'Early Deception'),
(59, 11, 'Hacker', 'Riyansh', 'remote_auth', 'System26', 100, 'hacker', 'none', 6, 'Early Deception'),
(61, 12, 'Hacker', 'anon', 'remote_auth', 'Ststem17', 0, 'incomplete', 'none', 0, 'Early Deception'),
(62, 12, 'Hacker', 'anon', 'remote_auth', 'System2', 100, 'hacker', 'none', 1, 'Early Deception'),
(63, 12, 'Hacker', 'anon', 'remote_auth', 'System10', 100, 'hacker', '15,5,21,30,13,9,2,6,', 2, 'Early Deception'),
(64, 12, 'Hacker', 'anon', 'remote_auth', 'System30', 100, 'hacker', '25,33,10,6,36,31,8,1', 3, 'Early Deception'),
(65, 12, 'Hacker', 'anon', 'user_auth', 'System1', 100, 'hacker', 'none', 4, 'Early Deception'),
(66, 12, 'Hacker', 'anon', 'user_auth', 'System1', 100, 'hacker', 'none', 5, 'Early Deception'),
(67, 12, 'Hacker', 'anon', 'windows_null_session', 'System1', 100, 'hacker', 'none', 6, 'Early Deception'),
(68, 13, 'Hacker', 'shshwtgrg', 'drown_attack', 'System11', 0, 'incomplete', 'none', 0, 'Early Deception'),
(69, 13, 'Hacker', 'shshwtgrg', 'drown_attack', 'System21', 100, 'hacker', 'none', 1, 'Early Deception'),
(70, 13, 'Hacker', 'shshwtgrg', 'brute_force', 'System30', -100, 'defender', '15,5,21,30,13,9,2,6,', 2, 'Early Deception'),
(71, 13, 'Hacker', 'shshwtgrg', 'sql_injection', 'System21', -100, 'defender', '25,33,10,6,36,31,8,1', 3, 'Early Deception'),
(72, 13, 'Hacker', 'shshwtgrg', 'drown_attack', 'System35', 100, 'hacker', 'none', 4, 'Early Deception'),
(73, 13, 'Hacker', 'shshwtgrg', 'drown_attack', 'System35', 100, 'hacker', 'none', 5, 'Early Deception'),
(74, 13, 'Hacker', 'shshwtgrg', 'drown_attack', 'System35', 100, 'hacker', 'none', 6, 'Early Deception'),
(75, 14, 'Hacker', 'avinav', 'drown_attack', 'System22', 0, 'incomplete', 'none', 0, 'Early Deception'),
(76, 14, 'Hacker', 'avinav', 'windows_null_session', 'System28', 100, 'hacker', 'none', 1, 'Early Deception'),
(77, 14, 'Hacker', 'avinav', 'remote_auth', 'System31', 100, 'hacker', '15,5,21,30,13,9,2,6,', 2, 'Early Deception'),
(78, 14, 'Hacker', 'avinav', 'brute_force', 'System6', -100, 'defender', '25,33,10,6,36,31,8,1', 3, 'Early Deception'),
(79, 14, 'Hacker', 'avinav', 'remote_auth', 'System8', 100, 'hacker', 'none', 4, 'Early Deception'),
(80, 14, 'Hacker', 'avinav', 'remote_auth', 'System29', 100, 'hacker', 'none', 5, 'Early Deception'),
(81, 14, 'Hacker', 'avinav', 'remote_auth', 'System27', 100, 'hacker', 'none', 6, 'Early Deception'),
(82, 15, 'Hacker', 'panthera', 'drown_attack', 'System22', 0, 'incomplete', 'none', 0, 'Early Deception'),
(83, 15, 'Hacker', 'panthera', 'drown_attack', 'System26', 100, 'hacker', 'none', 1, 'Early Deception'),
(84, 15, 'Hacker', 'panthera', 'remote_auth', 'System31', 100, 'hacker', '15,5,21,30,13,9,2,6,', 2, 'Early Deception'),
(85, 15, 'Hacker', 'panthera', 'brute_force', 'System38', -100, 'defender', '25,33,10,6,36,31,8,1', 3, 'Early Deception'),
(86, 15, 'Hacker', 'panthera', 'drown_attack', 'System11', 100, 'hacker', 'none', 4, 'Early Deception'),
(87, 15, 'Hacker', 'panthera', 'url_decoder', 'System12', 100, 'hacker', 'none', 5, 'Early Deception'),
(88, 15, 'Hacker', 'panthera', 'remote_auth', 'System34', 100, 'hacker', 'none', 6, 'Early Deception'),
(89, 16, 'Hacker', 'rohan', 'remote_auth', 'System23', 0, 'incomplete', 'none', 0, 'Early Deception'),
(90, 16, 'Hacker', 'rohan', 'DCOM_buffer_overrun', 'System18', 100, 'hacker', 'none', 1, 'Early Deception'),
(91, 16, 'Hacker', 'rohan', 'pop3_version', 'System18', 100, 'hacker', '15,5,21,30,13,9,2,6,', 2, 'Early Deception'),
(92, 16, 'Hacker', 'rohan', 'remote_auth', 'System18', 100, 'hacker', '25,33,10,6,36,31,8,1', 3, 'Early Deception'),
(93, 16, 'Hacker', 'rohan', 'windows_null_session', 'System24', 100, 'hacker', 'none', 4, 'Early Deception'),
(94, 16, 'Hacker', 'rohan', 'remote_exploit_buffe', 'System24', 100, 'hacker', 'none', 5, 'Early Deception'),
(95, 16, 'Hacker', 'rohan', 'pop3_version', 'System14', 100, 'hacker', 'none', 6, 'Early Deception'),
(96, 17, 'Hacker', 'chintu', 'drown_attack', 'System1', 0, 'incomplete', 'none', 0, 'Early Deception'),
(97, 17, 'Hacker', 'chintu', 'remote_auth', 'System19', 100, 'hacker', 'none', 1, 'Early Deception'),
(98, 17, 'Hacker', 'chintu', 'DoS_attack', 'System2', -100, 'defender', '15,5,21,30,13,9,2,6,', 2, 'Early Deception'),
(99, 17, 'Hacker', 'chintu', 'brute_force', 'System6', -100, 'defender', '25,33,10,6,36,31,8,1', 3, 'Early Deception'),
(100, 17, 'Hacker', 'chintu', 'drown_attack', 'System39', 100, 'hacker', 'none', 4, 'Early Deception'),
(101, 17, 'Hacker', 'chintu', 'user_auth', 'System4', 100, 'hacker', 'none', 5, 'Early Deception'),
(102, 17, 'Hacker', 'chintu', 'DCOM_buffer_overrun', 'System9', 100, 'hacker', 'none', 6, 'Early Deception'),
(103, 18, 'Hacker', 'pramod', 'remote_auth', 'System2', 0, 'incomplete', 'none', 0, 'Early Deception'),
(104, 18, 'Hacker', 'pramod', 'remote_auth', 'System2', 100, 'hacker', 'none', 1, 'Early Deception'),
(105, 18, 'Hacker', 'pramod', 'brute_force', 'System4', -100, 'defender', '15,5,21,30,13,9,2,6,', 2, 'Early Deception'),
(106, 18, 'Hacker', 'pramod', 'remote_auth', 'System5', 100, 'hacker', '25,33,10,6,36,31,8,1', 3, 'Early Deception'),
(107, 18, 'Hacker', 'pramod', 'remote_auth', 'System7', 100, 'hacker', 'none', 4, 'Early Deception'),
(108, 18, 'Hacker', 'pramod', 'remote_auth', 'System6', 100, 'hacker', 'none', 5, 'Early Deception'),
(109, 18, 'Hacker', 'pramod', 'remote_auth', 'System19', 100, 'hacker', 'none', 6, 'Early Deception');

-- --------------------------------------------------------

--
-- Table structure for table `gameplay`
--

CREATE TABLE `gameplay` (
  `id` int(11) NOT NULL,
  `gameplay_id` int(11) NOT NULL DEFAULT '1',
  `user_id` int(11) NOT NULL,
  `score` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `gameplay`
--

INSERT INTO `gameplay` (`id`, `gameplay_id`, `user_id`, `score`) VALUES
(24, 1, 11, 200),
(25, 1, 12, 600),
(26, 1, 13, 200),
(27, 1, 14, 400),
(28, 1, 15, 400),
(29, 1, 16, 600),
(30, 1, 17, 200),
(31, 1, 18, 400),
(32, 1, 2, 0),
(33, 1, 2, 0),
(34, 1, 2, 0),
(35, 1, 2, 0),
(36, 1, 2, 0),
(37, 1, 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nmap_used`
--

CREATE TABLE `nmap_used` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `System` varchar(50) NOT NULL,
  `gamenumber` int(11) NOT NULL,
  `gametype` varchar(50) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nmap_used`
--

INSERT INTO `nmap_used` (`id`, `userID`, `username`, `System`, `gamenumber`, `gametype`, `timestamp`) VALUES
(26, 2, 'vaibhav', 'System2', 2, 'Early Deception', '2019-02-28 10:47:47'),
(27, 2, 'vaibhav', 'System3', 2, 'Early Deception', '2019-02-28 10:47:47'),
(28, 2, 'vaibhav', 'System4', 2, 'Early Deception', '2019-02-28 10:47:47'),
(29, 2, 'vaibhav', 'System5', 2, 'Early Deception', '2019-02-28 10:47:47'),
(30, 2, 'vaibhav', 'System6', 2, 'Early Deception', '2019-02-28 10:47:47'),
(31, 2, 'vaibhav', 'System7', 2, 'Early Deception', '2019-02-28 10:47:47'),
(32, 2, 'vaibhav', 'System1', 1, 'Early Deception', '2019-02-28 10:47:47'),
(33, 2, 'vaibhav', 'System1', 0, 'Early Deception', '2019-02-28 11:00:00'),
(34, 2, 'vaibhav', 'System21', 0, 'Early Deception', '2019-02-28 11:00:08'),
(35, 2, 'vaibhav', 'System30', 0, 'Early Deception', '2019-02-28 11:00:31');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `level` varchar(50) NOT NULL,
  `branch` varchar(50) NOT NULL,
  `course` varchar(50) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `email`, `username`, `password`, `level`, `branch`, `course`, `country`, `age`, `gender`) VALUES
(2, 'vaibhavagarwal220@gmail.com', 'vaibhav', 'vaibhav12345', 'Bachelors', 'CSE', 'None', 'India', 21, 'male'),
(9, 'varundutt@yahoo.com', 'varundutt', '12345', 'Bachelors', 'CSE', 'YES', 'India', 35, 'male'),
(11, 'riyanshgoyal@gmail.com', 'Riyansh', 'abcde', 'Bachelors', 'CSE', 'YES', 'India', 21, 'male'),
(12, 'mail@abhigyan.xyz', 'anon', '1234asd', 'Bachelors', 'CSE', 'NO', 'India', 18, 'male'),
(13, 'shshwt.grg@gmail.com', 'shshwtgrg', 'shshwt.grg123', 'Bachelors', 'CSE', 'NO', 'India', 21, 'male'),
(14, 'b15211@students.iitmandi.ac.in', 'avinav', 'lauda', 'Bachelors', 'CSE', 'YES', 'India', 21, 'male'),
(15, 'rakshitraj911@gmail.com', 'panthera', '12345678', 'Bachelors', 'Electrical', 'NO', 'India', 19, 'male'),
(16, 'b16075@students.iitmandi.ac.in', 'rohan', 'rohan', 'Bachelors', 'Electrical', 'NO', 'India', 21, 'male'),
(17, 'avinashbarapati@gmail.com', 'chintu', '123456789', 'Bachelors', 'CSE', 'YES', 'India', 20, 'male'),
(18, 'jonwalpramod1122@gmail.com', 'pramod', '123456', 'Bachelors', 'CSE', 'NO', 'India', 22, 'male');

-- --------------------------------------------------------

--
-- Table structure for table `round_info`
--

CREATE TABLE `round_info` (
  `gameplay_id` int(11) NOT NULL DEFAULT '1',
  `user_id` int(11) NOT NULL,
  `cur_round` int(11) NOT NULL,
  `round1` int(11) NOT NULL DEFAULT '0',
  `round2` int(11) NOT NULL DEFAULT '0',
  `round3` int(11) NOT NULL DEFAULT '0',
  `round4` int(11) NOT NULL DEFAULT '0',
  `round5` int(11) NOT NULL DEFAULT '0',
  `round6` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `exploit_used`
--
ALTER TABLE `exploit_used`
  ADD PRIMARY KEY (`Number`);

--
-- Indexes for table `gameplay`
--
ALTER TABLE `gameplay`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nmap_used`
--
ALTER TABLE `nmap_used`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `exploit_used`
--
ALTER TABLE `exploit_used`
  MODIFY `Number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;
--
-- AUTO_INCREMENT for table `gameplay`
--
ALTER TABLE `gameplay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `nmap_used`
--
ALTER TABLE `nmap_used`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
