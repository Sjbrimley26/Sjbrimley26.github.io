module Global_CSS exposing (..)

import Html exposing ( Html )
import Html.Attributes exposing ( style )

type alias CSS msg = Html.Attribute msg

flex : CSS msg
flex =
  style
    [ ("display", "flex") ]

justify_center : CSS msg
justify_center =
  style
    [ ("justify-content", "center")
    ]

flex__column :  CSS msg
flex__column =
  style
    [ ("flex-direction", "column")]

marginAuto : CSS msg
marginAuto =
  style
    [ ("margin", "auto") ]

halfWidth : CSS msg
halfWidth =
  style
    [ ("width", "50%") ]

