import Html.Attributes exposeing ( style )

type alias CSS msg = Html.Attribute msg

flex : CSS msg
flex =
  style
    [ ("display", "flex") ]

flex__centered : CSS msg
flex__centered =
  style
    [ ("display", "flex")
    , ("justify-content", "center")
    ]

marginAuto : CSS msg
marginAuto =
  style
    [ ("margin", "auto") ]

halfWidth : CSS msg
halfWidth =
  style
    [ ("width", "50%") ]

module Global_CSS exposing (..)