if [ "$1" = "-m" ]; then
    if [ "$#" = 2 ]; then
        git commit -m "$2"
    fi
fi

git log > "Metadata/changelog.txt"
echo
echo "Log Updated"