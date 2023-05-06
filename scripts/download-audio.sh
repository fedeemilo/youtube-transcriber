#!/bin/bash

# Obtener la ruta absoluta del directorio actual del script
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Concatenar la ruta del directorio con el nombre del archivo yt-dlp
yt_dlp_path="$script_dir/yt-dlp"

VIDEO_ID=$1

[ -z "$VIDEO_ID" ] && echo "ERROR: No video ID specified" && exit 1

"$yt_dlp_path" "https://www.youtube.com/watch?v=$VIDEO_ID" --format m4a -o "./tmp/%(id)s.%(ext)s" 2>&1
