#!/bin/bash
# "Swap Comp" since Remotion bundler is hard-wired
input_file=$1
# variable=`cat ./remotion/reels/${input_file}.js`
# echo $variable
\cp "./remotion/reels/${input_file}.js" "./remotion/final.reel.js"
