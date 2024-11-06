/* eslint-disable */
const metadata = {
    models: {
        user: {
            name: 'User', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, email: {
                    name: "email",
                    type: "String",
                }, password: {
                    name: "password",
                    type: "String",
                }, posts: {
                    name: "posts",
                    type: "Activity",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'createdBy',
                }, sessions: {
                    name: "sessions",
                    type: "Session",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, ActivityTypesCreated: {
                    name: "ActivityTypesCreated",
                    type: "ActivityType",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'createdBy',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, email: {
                    name: "email",
                    fields: ["email"]
                },
            }
            ,
        }
        ,
        session: {
            name: 'Session', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, expiresAt: {
                    name: "expiresAt",
                    type: "DateTime",
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'sessions',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        activity: {
            name: 'Activity', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    isOptional: true,
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, description: {
                    name: "description",
                    type: "String",
                    isOptional: true,
                }, status: {
                    name: "status",
                    type: "ActivityStatus",
                    isOptional: true,
                }, endedAt: {
                    name: "endedAt",
                    type: "DateTime",
                    isOptional: true,
                }, lng: {
                    name: "lng",
                    type: "Decimal",
                    isOptional: true,
                }, lat: {
                    name: "lat",
                    type: "Decimal",
                    isOptional: true,
                }, coordinates: {
                    name: "coordinates",
                    type: "undefined",
                    isOptional: true,
                }, typeId: {
                    name: "typeId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'type',
                }, type: {
                    name: "type",
                    type: "ActivityType",
                    isDataModel: true,
                    backLink: 'Activities',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "typeId" },
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    defaultValueProvider: $default$Activity$createdById,
                    isForeignKey: true,
                    relationField: 'createdBy',
                }, createdBy: {
                    name: "createdBy",
                    type: "User",
                    isDataModel: true,
                    backLink: 'posts',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "createdById" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        activityType: {
            name: 'ActivityType', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, Activities: {
                    name: "Activities",
                    type: "Activity",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'type',
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    defaultValueProvider: $default$ActivityType$createdById,
                    isForeignKey: true,
                    relationField: 'createdBy',
                }, createdBy: {
                    name: "createdBy",
                    type: "User",
                    isDataModel: true,
                    backLink: 'ActivityTypesCreated',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "createdById" },
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    isOptional: true,
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        location: {
            name: 'Location', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                    isAutoIncrement: true,
                }, latitude: {
                    name: "latitude",
                    type: "Float",
                }, longitude: {
                    name: "longitude",
                    type: "Float",
                }, accuracy: {
                    name: "accuracy",
                    type: "Float",
                }, altitude: {
                    name: "altitude",
                    type: "Float",
                    isOptional: true,
                }, altitudeAccuracy: {
                    name: "altitudeAccuracy",
                    type: "Float",
                    isOptional: true,
                }, heading: {
                    name: "heading",
                    type: "Float",
                    isOptional: true,
                }, speed: {
                    name: "speed",
                    type: "Float",
                    isOptional: true,
                }, timestamp: {
                    name: "timestamp",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, created_at: {
                    name: "created_at",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updated_at: {
                    name: "updated_at",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, osm_locations: {
                    name: "osm_locations",
                    type: "OsmLocation",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'locations',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        osmLocation: {
            name: 'OsmLocation', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                    isAutoIncrement: true,
                }, place_id: {
                    name: "place_id",
                    type: "Int",
                }, licence: {
                    name: "licence",
                    type: "String",
                    isOptional: true,
                }, osm_type: {
                    name: "osm_type",
                    type: "String",
                    isOptional: true,
                }, osm_id: {
                    name: "osm_id",
                    type: "Int",
                }, lat: {
                    name: "lat",
                    type: "String",
                }, lon: {
                    name: "lon",
                    type: "String",
                }, display_name: {
                    name: "display_name",
                    type: "String",
                    isOptional: true,
                }, class: {
                    name: "class",
                    type: "String",
                    isOptional: true,
                }, type: {
                    name: "type",
                    type: "String",
                    isOptional: true,
                }, importance: {
                    name: "importance",
                    type: "Float",
                    isOptional: true,
                }, icon: {
                    name: "icon",
                    type: "String",
                    isOptional: true,
                }, timestamp: {
                    name: "timestamp",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, created_at: {
                    name: "created_at",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updated_at: {
                    name: "updated_at",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, location_id: {
                    name: "location_id",
                    type: "Int",
                    isForeignKey: true,
                    relationField: 'locations',
                }, boundingbox: {
                    name: "boundingbox",
                    type: "String",
                    isArray: true,
                }, locations: {
                    name: "locations",
                    type: "Location",
                    isDataModel: true,
                    backLink: 'osm_locations',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "location_id" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        reminder: {
            name: 'Reminder', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                    isAutoIncrement: true,
                }, content: {
                    name: "content",
                    type: "String",
                }, created_at: {
                    name: "created_at",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updated_at: {
                    name: "updated_at",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, complete: {
                    name: "complete",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, completed_at: {
                    name: "completed_at",
                    type: "DateTime",
                    isOptional: true,
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
    }
    ,
    authModel: 'User'
};
function $default$Activity$createdById(user: any): unknown {
    return user?.id;
}

function $default$ActivityType$createdById(user: any): unknown {
    return user?.id;
}
export default metadata;
