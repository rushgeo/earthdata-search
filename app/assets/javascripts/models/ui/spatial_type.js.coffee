ns = @edsc.models.ui

ns.SpatialType = do (ko) ->

  # Keeps track of the user's interface selections for the purpose of keeping buttons in sync
  class SpatialType
    constructor: ->
      @icon = ko.observable('fa-crop')
      @name = ko.observable('Spatial')

    selectNone: =>
      @name('Spatial')
      @icon ('fa-crop')

    selectPoint: =>
      @name('Point')
      @icon ('fa-map-marker')

    selectRectangle: =>
      @name('Rectangle')
      @icon ('edsc-icon-rect-open')

    selectPolygon: =>
      @name('Polygon')
      @icon ('edsc-icon-poly-open')

    selectShapefile: =>
      @name('Shape File')
      @icon ('edsc-icon-file')

  exports = SpatialType