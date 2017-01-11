package models

// User struct
type User struct {
	Username string
	Password string

	Phone string
	Qq    string
	Wx    string

	ShippingAddress []Address
	BillingAddress  []Address
	InstantLocation Location
}
