DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR
open -a /Applications/Safari.app http://127.0.0.1:4000/
jekyll serve --watch
