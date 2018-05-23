# Cellular automata in JS

This is a collection of most known cellular automata implemented in JavaScript.

# Content

* Conway's game of life
* Wireworld
* Langton's ant
* Seeds
* Brian's Brain

## How to run

Up to date project is available at [surge](http://cellular-automata.surge.sh)
To run locally:

    Install dependencies:
    $yarn
    Start project:
    $yarn start

## How to use creator

To save created automaton locally:

    Copy data to clipboard using "Copy Data" button

    Call <Canvas /> componend like so:

    <Canvas
    width={usedWidth}
    height={usedHeight}
    gridData={dataCopiedFromCreator}
    speed={timeInMilliseconds}
    />

## Technologies used

* [React](https://github.com/facebook/react)
* [Storybook](https://github.com/storybooks/storybook)
