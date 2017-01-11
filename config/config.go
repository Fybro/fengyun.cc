package config

import (
	"flag"

	"github.com/spf13/viper"
)

// Conf map
var Conf map[string]string

func init() {
	viper.AddConfigPath("config")
	viper.ReadInConfig()
	var env = "production"
	var isDevelopment bool
	var isTest bool
	var isDebug bool
	flag.BoolVar(&isDevelopment, "d", false, "true for production app mode")
	flag.BoolVar(&isTest, "t", false, "true for test app mode")
	flag.BoolVar(&isDebug, "b", false, "true for debug app mode")
	flag.Parse()
	if isDevelopment {
		env = "development"
	}
	if isTest {
		env = "test"
	}
	if isDebug {
		env = "debug"
	}
	Conf = viper.GetStringMapString(env)
}
