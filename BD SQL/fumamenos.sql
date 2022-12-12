-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-12-2022 a las 01:37:56
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fumamenos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consumos`
--

CREATE TABLE `consumos` (
  `id` int(50) NOT NULL,
  `date` date NOT NULL,
  `time` time(5) NOT NULL,
  `n_Cigarette` int(255) NOT NULL,
  `place` varchar(50) NOT NULL,
  `emotion` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `note` varchar(50) NOT NULL,
  `usuario_id_usuario` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `consumos`
--

INSERT INTO `consumos` (`id`, `date`, `time`, `n_Cigarette`, `place`, `emotion`, `company`, `note`, `usuario_id_usuario`) VALUES
(1, '2022-12-04', '15:33:00.00000', 3, 'casa', 'Enojado', 'si', '', 33),
(2, '2022-12-04', '15:33:00.00000', 2, 'trabajo', 'Enojado', 'si', '', 33),
(3, '2022-11-29', '15:33:00.00000', 3, 'plaza', 'Enojado', 'si', '', 33),
(4, '2022-12-04', '15:33:00.00000', 1, 'bar', 'Feliz', 'si', '', 33),
(5, '2022-12-30', '15:34:00.00000', 1, 'plaza', 'Decepcionado', 'si', '', 33),
(6, '2022-12-20', '15:34:00.00000', 2, 'plaza', 'Decepcionado', 'si', '', 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(3) NOT NULL,
  `nombre` text NOT NULL,
  `correo` text NOT NULL,
  `contrasenia` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `contrasenia`) VALUES
(29, 'Cristobal Leal Lara', 'pelos@gmail.com', 'oelos'),
(30, 'Jesucristo', 'nazareno@gmail.com', 'cruz'),
(31, 'frizer Batalla', 'frizer@gmail.com', '1111'),
(32, 'prueba', 'prueba', '12'),
(33, 'Joel de Jesus Lopez Ruiz', 'ssj@gmail.com', 'ssj'),
(34, 'batallo', 'batallo@gmail.com', '222'),
(35, 'noe', 'noe@gmail.com', '333'),
(36, 'Jiren de Jesus', 'jiren@gmail.com', 'jiren'),
(37, 'Mexico Perdio', 'mp@gmail.com', 'mp'),
(38, 'noeon', 'noeon@gmail.com', '123'),
(39, 'Alejandro Luna', 'luna@gmail.com', '221198'),
(40, 'Marco Antonio', 'marco@gmail.com', '221213'),
(41, 'gohan gudiel', 'gohan@gmail.com', '55555'),
(42, 'Ana Liz', 'analiz@gmail.com', 'analiz');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `consumos`
--
ALTER TABLE `consumos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `consumos`
--
ALTER TABLE `consumos`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
