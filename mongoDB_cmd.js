// 1 lower than - 40
// db.Authors.find({age: {$lt: 40}})

// 2 higher than - 40
// db.Authors.find({age: {$gt: 40}})

// 3 higher than - 20, lower than - 60
// db.Authors.find({age: {$lt: 60,$gt: 20}})

// 4 equal/higher than - 20, equal/lower than - 60
// db.Authors.find({age: {$gte: 20,$lte: 60}})

// 5 show 3 authors
// db.Authors.find({}).limit(3)

//**** db.Authors.find({},{title:1}) -יציג את השדה
//**** db.Authors.find({},{title:0}) - יציג את כולם חוץ מאת השדה
//***/