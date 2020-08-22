# test_2

0. IT'S WORKING MY MAN part 3
1. check package.json di bagian dependencies dan devDependencies
2. terminal -> npm install
3. ubah config/config.js di bagian development
4. drop test_2 schema on mysql workbench atau phpmyadmin
5. check app.js apakah db.sequelize.sync({force: true}) atau db.sequelize.sync()?
6. terminal -> npm run dev

PS. bingung masalah query di AppliedJob dan InvitedCandidate karena ada kolom status 

PSS. sudah ditambah bcrypt untuk register dan login tapi blom tambahin passport.js / token untuk universal register dan login

PSSS.  blom ada .env karena blom ada secret_key or API_key
