package database

import (
	"app/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(postgres.Open("host=localhost user=postgres password=123456 dbname=goauth port=5432 sslmode=disable TimeZone=Asia/Shanghai"), &gorm.Config{})
	if err != nil {
		panic("could not connect to the database")
	}
	DB = connection

	connection.AutoMigrate(&models.User{})
}
