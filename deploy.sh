#!/bin/bash

npm run build && /bin/bash ./build.sh && docker push stevebrownlee/kennels
