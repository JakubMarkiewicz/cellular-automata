# About

Wireworld is a cellular automaton first proposed by Brian Silverman in 1987, as part of his program Phantom Fish Tank. It subsequently became more widely known as a result of an article in the "Computer Recreations" column of Scientific American. Wireworld is particularly suited to simulating electronic logic elements, or "gates", and Wireworld is Turing-complete.

# States

* empty (black)
* electron head (blue)
* electorn tail (red)
* conductor (yellow)

# Rules

* empty → empty
* electron head → electron tail
* electron tail → conductor
* conductor → electron head if exactly one or two of the neighbouring cells are electron heads, otherwise remains conductor

[READ MORE ON WIKIPEDIA](https://en.wikipedia.org/wiki/Wireworld)
