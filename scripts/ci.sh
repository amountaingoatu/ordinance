#!/bin/bash
set -e

git pull origin
npm i
npx zenstack generate
npm run build

rm -rf /opt/ordinance/*
cp -r ./.output/* /opt/ordinance
systemctl restart ordinance

git pull origin && npx zenstack generate && npm run build
rm -rf /opt/ordinance/* && mv .output/* /opt/ordinance/ && systemctl restart ordinance