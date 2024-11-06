#!/bin/bash
set -e

npm i
npx zenstack generate
npm run build

rm -rf /opt/ordinance/*
cp -r ./.output/* /opt/ordinance
systemctl restart ordinance