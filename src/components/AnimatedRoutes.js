import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import MoviesPage from "./MoviesPage";
import MoviesPage2 from "./MoviesPage2";
import MoviesPage3 from "./MoviesPage3";
import MoviesPage4 from "./MoviesPage4";
import Intro from "./Intro";
import Genres from "./Genres";
import Movie from "./Movie";
import MovieSimilar from "./MovieSimilar";
import SearchPage from "./SearchPage";
import SearchFormComponent from "./SearchFormComponent";
import SearchFormComponent2 from "./SearchFormComponent2";

import { AnimatePresence, motion } from "framer-motion";

//AnimatedRoutes is called in the App file, and this file inside has the rest of the routes, the structure is <Route exact path="its path" element={<motion.div this creates the animation and them the element inside each route}></motion.div>

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <SearchFormComponent />
              <MoviesPage />
              <MoviesPage2 />
              <MoviesPage3 />
              <MoviesPage4 />
            </motion.div>
          }
        />
        <Route
          exact
          path="/movie"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Movie />
              <MovieSimilar />
            </motion.div>
          }
        />
        <Route
          path="/genres/:genre"
          element={
            <>
              <Intro />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Genres />
              </motion.div>
            </>
          }
        />
        <Route
          path="/movie/:movieId"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Movie />
              <MovieSimilar />
            </motion.div>
          }
        />
        <Route
          exact
          path="/search/:filmId"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <SearchFormComponent2 />
              <SearchPage />
            </motion.div>
          }
        />
        <Route
          exact
          path="/search"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <SearchFormComponent2 />
              <SearchPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
