
read -a posts <<< $(ls -t -x Assets/blog-posts/)
json='['
for post in ${posts[@]}; do
    json="$json\"$post\", "
done
json=${json::-2}
echo -e "$json]" > "Metadata/post-list.json"

if [ "$1" = "-m" ]; then
    if [ "$#" = 2 ]; then
        git add "./Metadata/post-list.json"
        git commit -m "$2"
    fi
fi

git log > "Metadata/changelog.txt"

echo -e "\nLog/Blog Updated"