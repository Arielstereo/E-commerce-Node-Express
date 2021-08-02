-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-08-2021 a las 16:16:58
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp_final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name_categ` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name_categ`, `ts_create`, `ts_update`) VALUES
(1, 'Caribe', '2021-07-13 11:44:15', '2021-07-13 11:44:15'),
(2, 'Europa', '2021-07-13 11:44:37', '2021-07-13 11:44:37'),
(3, 'USA', '2021-07-13 11:45:19', '2021-07-13 11:45:19'),
(4, 'Sudamerica', '2021-07-13 11:45:28', '2021-07-13 11:45:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `sector` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `file_number` int(11) NOT NULL,
  `removed` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`id`, `name`, `surname`, `sector`, `file_number`, `removed`, `ts_create`, `ts_update`) VALUES
(1, 'Juan', 'Perez', 'Ventas', 1258, 0, '2021-07-27 17:11:41', '2021-07-28 13:25:25'),
(2, 'Fabián', 'Gutierrez', 'Administración', 2053, 0, '2021-07-27 19:12:13', '2021-07-27 19:12:13'),
(3, 'Laura', 'Sosa', 'Call-center', 1366, 0, '2021-07-27 19:14:36', '2021-07-27 19:27:40'),
(4, 'Jazmin', 'Denver', 'Ventas', 2666, 0, '2021-08-02 11:15:00', '2021-08-02 11:15:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_product` int(11) NOT NULL,
  `removed` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `uid`, `id_product`, `removed`, `ts_create`, `ts_update`) VALUES
(1, '26603a27-f024-43a1-bb3d-20239a07aeeb.jpeg', 1, 0, '2021-07-12 15:58:22', '2021-07-20 12:02:10'),
(2, '66a3cfda-8c51-47c1-aaa8-b787ed015474.jpeg', 2, 0, '2021-07-12 16:49:36', '2021-07-12 16:49:36'),
(3, '5bd4b04c-3936-40dc-b3f9-92210da45954.jpeg', 3, 0, '2021-07-12 16:57:55', '2021-07-12 16:57:55'),
(4, '798fe512-53b3-465b-bf4c-a9b715f8ea07.jpeg', 4, 0, '2021-07-12 17:07:59', '2021-07-12 17:07:59'),
(5, '5a5f299b-bace-451a-94c7-ea02535b5150.jpeg', 6, 0, '2021-07-14 13:13:07', '2021-07-22 12:17:19'),
(6, 'c78a67de-8f83-4cfb-a30c-6b7d7a431afd.jpeg', 7, 0, '2021-07-15 11:16:04', '2021-07-15 11:16:04'),
(7, '957cf5b4-aef9-4af6-9fe9-94310949837e.jpeg', 8, 0, '2021-07-15 11:17:08', '2021-07-15 11:17:08'),
(8, '3bc59a3e-339f-49c7-96f8-5a7bce4cff4c.jpeg', 9, 0, '2021-07-15 11:20:37', '2021-07-15 11:20:37'),
(9, 'fe0a51bf-b73d-41e6-8e93-b9e7071df1ef.jpeg', 10, 0, '2021-07-20 15:48:10', '2021-07-20 15:48:10'),
(10, '51beac2c-5f35-4e7d-b839-2a420ce00633.jpeg', 11, 0, '2021-07-23 23:58:29', '2021-07-23 23:58:29'),
(11, '96eb5415-a1f1-4e57-874d-fcb1bddaee63.jpeg', 17, 0, '2021-07-27 18:11:13', '2021-07-27 18:11:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `price` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `removed` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `city`, `description`, `price`, `id_category`, `removed`, `ts_create`, `ts_update`) VALUES
(1, 'Miami', 'vuelos incluidos/all-inclusive', 2000000, 3, 0, '2021-07-12 15:58:20', '2021-07-23 23:57:23'),
(2, 'Cancún', 'vuelos incluidos/all-inclusive/excursiones', 250000, 1, 0, '2021-07-12 16:49:36', '2021-07-13 11:46:11'),
(3, 'Orlando', 'vuelos incluidos/all-inclusive/entradas a los parques', 415000, 3, 0, '2021-07-12 16:57:55', '2021-07-20 16:06:46'),
(4, 'Paris', 'vuelos incluidos/all-inclusive', 325000, 2, 0, '2021-07-12 17:07:59', '2021-07-13 11:46:21'),
(6, 'Cataratas del Iguazú', 'vuelos incluidos/all-inclusive/excursiones', 185000, 4, 0, '2021-07-14 13:13:07', '2021-07-22 12:17:12'),
(7, 'Punta Cana', 'vuelos incluidos/all-inclusive', 320000, 1, 0, '2021-07-15 11:16:03', '2021-07-15 11:16:03'),
(8, 'Rio de Janeiro', 'vuelos incluidos/all-inclusive/excursiones', 230000, 4, 0, '2021-07-15 11:17:08', '2021-07-15 11:17:08'),
(9, 'Roma', 'vuelos incluidos/all-inclusive/excursiones', 210000, 2, 0, '2021-07-15 11:20:37', '2021-07-15 11:20:37'),
(10, 'Las Vegas', 'vuelos incluidos/all-inclusive', 299000, 3, 0, '2021-07-20 15:48:09', '2021-07-20 15:48:09'),
(11, 'Florida', 'vuelos incluidos/all-inclusive/excursiones', 2000000, 3, 0, '2021-07-23 23:58:29', '2021-07-23 23:58:29'),
(12, 'Venezuela', 'Isla margarita, Isla Coche', 100000, 1, 0, '2021-07-27 17:48:24', '2021-07-27 17:48:24'),
(13, 'Venezuela', 'Isla margarita, Isla Coche', 100000, 1, 0, '2021-07-27 17:49:07', '2021-07-27 17:49:07'),
(14, 'Buenos Aires', 'vuelos incluidos/all-inclusive/excursiones', 100000, 4, 0, '2021-07-27 17:50:19', '2021-07-27 17:50:19'),
(15, 'Buenos Aires', 'vuelos incluidos/all-inclusive/excursiones', 10000000, 4, 0, '2021-07-27 17:55:49', '2021-07-27 17:55:49'),
(16, 'Buenos Aires', 'vuelos incluidos/all-inclusive/excursiones', 180200, 4, 0, '2021-07-27 18:03:55', '2021-07-27 18:03:55'),
(17, 'Buenos Aires', 'vuelos incluidos/all-inclusive/excursiones', 123000, 4, 0, '2021-07-27 18:11:12', '2021-07-27 18:11:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `authEmail` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `confirmEmail` tinyint(4) NOT NULL DEFAULT 0,
  `admin` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `pass`, `email`, `authEmail`, `country`, `confirmEmail`, `admin`, `ts_create`, `ts_update`) VALUES
(8, 'Alejandra', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 'arielstereo21@gmail.com', '1a8702d9-71ed-4016-9367-531b6bd80ace', 'chile', 1, 0, '2021-07-06 11:11:04', '2021-08-02 11:13:29'),
(9, 'jazmin', '47e30d8f8eba5cf3519829c8db7cf2248e45176d', 'arielstereo@msn.com', 'bfa3bcf9-7977-4800-8029-1d6766bac9f0', 'argentina', 1, 1, '2021-07-10 12:38:34', '2021-07-11 13:23:25'),
(12, 'sebastian', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 'arielstereo21@gmail.com', 'd9adf931-a3b9-4531-8739-ecaa85c9e1b2', 'argentina', 1, 0, '2021-07-24 00:12:21', '2021-07-24 00:13:23'),
(13, 'ariel', '84cbb8cb3aaa7a5a5f98ab30b5b0c948cca74f93', 'arielstereo@msn.com', 'af1213af-083f-44cc-bddb-1af70d6b7499', 'brasil', 1, 0, '2021-07-27 11:15:29', '2021-07-27 11:16:16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
