export const translations = {
  ca: {
    travel: {
      title: 'Viatge a Grècia',
      subtitle: 'Com arribar a Egio des de Barcelona',
      intro: 'Hem preparat diverses opcions per arribar a Egio, al Peloponès, segons el vostre pressupost, temps i estil de viatge.',
      overviewTitle: 'Tres maneres d’arribar-hi',
      detailsTitle: 'El viatge, pas a pas',
      routeTitle: 'Ruta orientativa',
      comfort: 'Comoditat',
      cost: 'Cost',
      time: 'Temps orientatiu',
      idealFor: 'Ideal per a',
      stepsTitle: 'El trajecte',
      observations: 'A tenir en compte',
      tipsTitle: 'Consells pràctics',
      summaryTitle: 'Quina opció triem?',
      summary: 'Per a la majoria de convidats, recomanem volar a Atenes i llogar un cotxe: facilita l’arribada, els desplaçaments per la zona i la tornada.',
      note: 'Els preus i temps són orientatius i poden variar segons la temporada i la disponibilitat. Els imports de referència no són tarifes confirmades per a l’agost de 2027. El vol no està inclòs.',
      sourcesTitle: 'Horaris i reserves',
      routes: [
        [
          'Barcelona',
          'Atenes',
          'Egio'
        ],
        [
          'Barcelona',
          'Roma',
          'Illes Jòniques',
          'Patras',
          'Egio'
        ]
      ],
      routeNote: 'Esquema conceptual: la ruta per les illes depèn dels vols i les connexions marítimes disponibles.',
      options: [
        {
          id: 'economy',
          title: 'Opció 1 · Econòmica',
          badge: 'Més econòmica',
          description: 'Avió a Atenes i autobusos fins a Egio. Una arribada senzilla sense llogar cotxe.',
          comfort: 'Amb transbordaments',
          cost: 'Baix',
          time: 'Segons enllaços i trànsit',
          flow: [
            'Vol',
            'Bus X93',
            'KTEL',
            'Bus regional',
            'Egio'
          ],
          steps: [
            {
              title: 'Barcelona → Atenes',
              items: [
                'Volar a l’aeroport d’Atenes.'
              ]
            },
            {
              title: 'De l’aeroport al bus regional',
              items: [
                'X93 → estació d’autobusos KTEL de Kifisos. L’opció més pràctica per continuar cap a Egio.',
                'X95 → plaça Syntagma. Per visitar el centre d’Atenes; després cal anar a KTEL per separat.',
                'Bus de l’aeroport: uns 6 € com a referència.'
              ]
            },
            {
              title: 'KTEL → Egio',
              items: [
                'Demanar a taquilla un bitllet a Egio i confirmar quin servei cap a Patras hi para.',
                'Bus regional: uns 18 € com a referència; confirmar tarifa i parada abans del viatge.'
              ]
            }
          ],
          facts: [
            {
              label: 'Bus aeroport',
              value: '≈ 6 €'
            },
            {
              label: 'Bus regional',
              value: '≈ 18 €'
            }
          ],
          notes: [
            'Consultar horaris i deixar marge entre el vol i el bus regional.',
            'Indicar sempre Egio com a destinació a taquilla.'
          ],
          ideal: 'Qui vol estalviar i no li fa res viatjar en transport públic.',
          conclusion: 'L’alternativa econòmica per arribar sense cotxe.'
        },
        {
          id: 'recommended',
          title: 'Opció 2 · Recomanada',
          badge: 'La nostra recomanació',
          description: 'Vol a Atenes i cotxe de lloguer des de l’aeroport. Més llibertat durant tota l’estada.',
          comfort: 'Alta',
          cost: 'Lloguer + despeses',
          time: '≈ 2 h de conducció',
          flow: [
            'Vol',
            'Cotxe de lloguer',
            'Egio'
          ],
          steps: [
            {
              title: 'Barcelona → Atenes',
              items: [
                'Volar a l’aeroport d’Atenes.'
              ]
            },
            {
              title: 'Recollir el cotxe a l’aeroport',
              items: [
                'Reservar amb mesos d’antelació.',
                'Comparar opcions a Skyscanner i consultar reserves a Rentalcars o DiscoverCars.',
                'Triar assegurança a tot risc i quilòmetres il·limitats; revisar les condicions.'
              ]
            },
            {
              title: 'Conduir fins a Egio',
              items: [
                'Calcular unes 2 hores, segons el trànsit.',
                'Prioritzar les autopistes: tenen peatges, però faciliten el trajecte i estalvien temps respecte a carreteres secundàries.'
              ]
            }
          ],
          facts: [
            {
              label: 'Aeroport → Egio',
              value: '≈ 2 h'
            },
            {
              label: 'Gasolina de referència',
              value: '≈ 2 €/l'
            }
          ],
          notes: [
            'Preveure lloguer, peatges i combustible; el preu de la gasolina pot variar.',
            'Llibertat per arribar a Egio, visitar platges i pobles i tornar a l’aeroport.'
          ],
          ideal: 'Qui prioritza comoditat, flexibilitat i llibertat de moviment.',
          conclusion: 'L’opció més còmoda i pràctica per a la majoria.'
        },
        {
          id: 'adventure',
          title: 'Opció 3 · Aventurers',
          badge: 'Més aventurera',
          description: 'Combinar la boda amb una ruta per les illes Jòniques, a l’oest de Grècia.',
          comfort: 'Més organització',
          cost: 'Variable',
          time: 'Segons ruta + ≈ 30 min des de Patras',
          flow: [
            'Vol amb escala',
            'Illa Jònica',
            'Ferri / enllaç',
            'Patras',
            'Cotxe',
            'Egio'
          ],
          steps: [
            {
              title: 'Barcelona → Roma → illes Jòniques',
              items: [
                'Valorar una escala a Roma segons els vols disponibles.',
                'Corfú, Lefkada i Cefalònia són idees per a la ruta; comprovar l’aeroport d’accés i les connexions de cada illa.',
                'Organitzar allotjament i mobilitat interna amb antelació.'
              ]
            },
            {
              title: 'Connectar amb el continent',
              items: [
                'Consultar el port i el ferri segons l’illa: no totes tenen connexió directa amb Patras.',
                'Per a Cefalònia, consultar la ruta Sami–Patras.',
                'Ferri: 15–20 € com a referència inicial, pendent de confirmar segons el trajecte; no és una tarifa comuna a totes les illes.'
              ]
            },
            {
              title: 'Patras → Egio → Atenes',
              items: [
                'Llogar un cotxe a Patras i conduir uns 30 minuts fins a Egio.',
                'Consultar si es pot retornar a l’aeroport d’Atenes i el possible suplement.',
                'Després de la boda, tornar per Atenes i aprofitar per visitar la ciutat abans del vol a Barcelona.'
              ]
            }
          ],
          facts: [
            {
              label: 'Ferri de referència',
              value: '≈ 15–20 €'
            },
            {
              label: 'Patras → Egio',
              value: '≈ 30 min'
            }
          ],
          notes: [
            'Coordinar vols, allotjament, ferris i cotxe abans de reservar.',
            'La ruta i el cost depenen de l’illa i de les connexions disponibles.'
          ],
          ideal: 'Qui vol allargar el viatge i descobrir illes i altres zones del país.',
          conclusion: 'L’alternativa per convertir la boda en unes vacances per Grècia.'
        }
      ],
      tips: [
        'Reservar el cotxe amb antelació.',
        'Valorar les autopistes per estalviar temps.',
        'Indicar Egio a la taquilla del bus.',
        'Revisar horaris de busos i ferris.',
        'Preveure peatges i gasolina.',
        'Per a la majoria, cotxe des d’Atenes.'
      ]
    },
    nav: {
      information: 'Informació',
      mainNavigation: 'Navegació principal',
      openMenu: 'Obre el menú: Informació',
      closeMenu: 'Tanca el menú: Informació',
      venue: 'Lloc i com arribar-hi',
      program: 'Programa',
      travel: 'Viatge a Grècia',
      accommodation: 'Allotjaments',
      cultureFood: 'Costums i gastronomia',
      localPlaces: 'Llocs de la zona',
    },
    location: 'Egio · Grècia',
    languageSelector: 'Idioma',
  },
  es: {
    travel: {
      title: 'Viaje a Grecia',
      subtitle: 'Cómo llegar a Egio desde Barcelona',
      intro: 'Hemos preparado varias opciones para llegar a Egio, en el Peloponeso, según vuestro presupuesto, tiempo y estilo de viaje.',
      overviewTitle: 'Tres maneras de llegar',
      detailsTitle: 'El viaje, paso a paso',
      routeTitle: 'Ruta orientativa',
      comfort: 'Comodidad',
      cost: 'Coste',
      time: 'Tiempo orientativo',
      idealFor: 'Ideal para',
      stepsTitle: 'El trayecto',
      observations: 'A tener en cuenta',
      tipsTitle: 'Consejos prácticos',
      summaryTitle: '¿Qué opción elegimos?',
      summary: 'Para la mayoría de invitados, recomendamos volar a Atenas y alquilar un coche: facilita la llegada, los desplazamientos por la zona y la vuelta.',
      note: 'Los precios y tiempos son orientativos y pueden cambiar según la temporada y la disponibilidad. Los importes de referencia no son tarifas confirmadas para agosto de 2027. El vuelo no está incluido.',
      sourcesTitle: 'Horarios y reservas',
      routes: [
        [
          'Barcelona',
          'Atenas',
          'Egio'
        ],
        [
          'Barcelona',
          'Roma',
          'Islas Jónicas',
          'Patras',
          'Egio'
        ]
      ],
      routeNote: 'Esquema conceptual: la ruta por las islas depende de los vuelos y las conexiones marítimas disponibles.',
      options: [
        {
          id: 'economy',
          title: 'Opción 1 · Económica',
          badge: 'Más económica',
          description: 'Avión a Atenas y autobuses hasta Egio. Una llegada sencilla sin alquilar coche.',
          comfort: 'Con transbordos',
          cost: 'Bajo',
          time: 'Según enlaces y tráfico',
          flow: [
            'Vuelo',
            'Bus X93',
            'KTEL',
            'Bus regional',
            'Egio'
          ],
          steps: [
            {
              title: 'Barcelona → Atenas',
              items: [
                'Volar al aeropuerto de Atenas.'
              ]
            },
            {
              title: 'Del aeropuerto al autobús regional',
              items: [
                'X93 → estación de autobuses KTEL de Kifisos. La opción más práctica para seguir hacia Egio.',
                'X95 → plaza Syntagma. Para visitar el centro de Atenas; después hay que desplazarse a KTEL por separado.',
                'Bus del aeropuerto: unos 6 € como referencia.'
              ]
            },
            {
              title: 'KTEL → Egio',
              items: [
                'Pedir en taquilla un billete a Egio y confirmar qué servicio hacia Patras para allí.',
                'Bus regional: unos 18 € como referencia; confirmar tarifa y parada antes del viaje.'
              ]
            }
          ],
          facts: [
            {
              label: 'Bus aeropuerto',
              value: '≈ 6 €'
            },
            {
              label: 'Bus regional',
              value: '≈ 18 €'
            }
          ],
          notes: [
            'Consultar horarios y dejar margen entre el vuelo y el bus regional.',
            'Indicar siempre Egio como destino en taquilla.'
          ],
          ideal: 'Quienes buscan ahorrar y no les importa viajar en transporte público.',
          conclusion: 'La alternativa económica para llegar sin coche.'
        },
        {
          id: 'recommended',
          title: 'Opción 2 · Recomendada',
          badge: 'Nuestra recomendación',
          description: 'Vuelo a Atenas y coche de alquiler desde el aeropuerto. Más libertad durante toda la estancia.',
          comfort: 'Alta',
          cost: 'Alquiler + gastos',
          time: '≈ 2 h de conducción',
          flow: [
            'Vuelo',
            'Coche de alquiler',
            'Egio'
          ],
          steps: [
            {
              title: 'Barcelona → Atenas',
              items: [
                'Volar al aeropuerto de Atenas.'
              ]
            },
            {
              title: 'Recoger el coche en el aeropuerto',
              items: [
                'Reservar con meses de antelación.',
                'Comparar opciones en Skyscanner y consultar reservas en Rentalcars o DiscoverCars.',
                'Elegir seguro a todo riesgo y kilómetros ilimitados; revisar las condiciones.'
              ]
            },
            {
              title: 'Conducir hasta Egio',
              items: [
                'Calcular unas 2 horas, según el tráfico.',
                'Priorizar las autopistas: tienen peajes, pero facilitan el trayecto y ahorran tiempo frente a carreteras secundarias.'
              ]
            }
          ],
          facts: [
            {
              label: 'Aeropuerto → Egio',
              value: '≈ 2 h'
            },
            {
              label: 'Gasolina de referencia',
              value: '≈ 2 €/l'
            }
          ],
          notes: [
            'Presupuestar alquiler, peajes y combustible; el precio de la gasolina puede variar.',
            'Libertad para llegar a Egio, visitar playas y pueblos y volver al aeropuerto.'
          ],
          ideal: 'Quienes priorizan comodidad, flexibilidad y libertad de movimiento.',
          conclusion: 'La opción más cómoda y práctica para la mayoría.'
        },
        {
          id: 'adventure',
          title: 'Opción 3 · Aventureros',
          badge: 'Más aventurera',
          description: 'Combinar la boda con una ruta por las islas Jónicas, al oeste de Grecia.',
          comfort: 'Más organización',
          cost: 'Variable',
          time: 'Según ruta + ≈ 30 min desde Patras',
          flow: [
            'Vuelo con escala',
            'Isla Jónica',
            'Ferry / enlace',
            'Patras',
            'Coche',
            'Egio'
          ],
          steps: [
            {
              title: 'Barcelona → Roma → islas Jónicas',
              items: [
                'Valorar una escala en Roma según los vuelos disponibles.',
                'Corfú, Lefkada y Cefalonia son ideas para la ruta; comprobar el aeropuerto de acceso y las conexiones de cada isla.',
                'Organizar alojamiento y movilidad interna con antelación.'
              ]
            },
            {
              title: 'Conectar con el continente',
              items: [
                'Consultar el puerto y el ferry según la isla: no todas tienen conexión directa con Patras.',
                'Para Cefalonia, consultar la ruta Sami–Patras.',
                'Ferry: 15–20 € como referencia inicial, pendiente de confirmar según trayecto; no es una tarifa común a todas las islas.'
              ]
            },
            {
              title: 'Patras → Egio → Atenas',
              items: [
                'Alquilar un coche en Patras y conducir unos 30 minutos hasta Egio.',
                'Consultar si se puede devolver en el aeropuerto de Atenas y el posible suplemento.',
                'Después de la boda, volver por Atenas y aprovechar para visitar la ciudad antes del vuelo a Barcelona.'
              ]
            }
          ],
          facts: [
            {
              label: 'Ferry de referencia',
              value: '≈ 15–20 €'
            },
            {
              label: 'Patras → Egio',
              value: '≈ 30 min'
            }
          ],
          notes: [
            'Coordinar vuelos, alojamiento, ferris y coche antes de reservar.',
            'La ruta y su coste dependen de la isla y de las conexiones disponibles.'
          ],
          ideal: 'Quienes quieren alargar el viaje y descubrir islas y otras zonas del país.',
          conclusion: 'La alternativa para convertir la boda en unas vacaciones por Grecia.'
        }
      ],
      tips: [
        'Reservar el coche con antelación.',
        'Valorar las autopistas para ahorrar tiempo.',
        'Indicar Egio en la taquilla del bus.',
        'Revisar horarios de buses y ferris.',
        'Tener en cuenta peajes y gasolina.',
        'Para la mayoría, coche desde Atenas.'
      ]
    },
    nav: {
      information: 'Información',
      mainNavigation: 'Navegación principal',
      openMenu: 'Abrir el menú: Información',
      closeMenu: 'Cerrar el menú: Información',
      venue: 'Lugar y cómo llegar',
      program: 'Programa',
      travel: 'Viaje a Grecia',
      accommodation: 'Alojamientos',
      cultureFood: 'Costumbres y comidas',
      localPlaces: 'Sitios de la zona',
    },
    location: 'Egio · Grecia',
    languageSelector: 'Idioma',
  },
  el: {
    travel: {
      title: 'Ταξίδι στην Ελλάδα',
      subtitle: 'Από τη Βαρκελώνη στο Αίγιο',
      intro: 'Ετοιμάσαμε διαφορετικές επιλογές για να φτάσετε στο Αίγιο, στην Πελοπόννησο, ανάλογα με τον προϋπολογισμό, τον χρόνο και το στιλ του ταξιδιού σας.',
      overviewTitle: 'Τρεις τρόποι για να φτάσετε',
      detailsTitle: 'Το ταξίδι, βήμα βήμα',
      routeTitle: 'Ενδεικτική διαδρομή',
      comfort: 'Άνεση',
      cost: 'Κόστος',
      time: 'Ενδεικτικός χρόνος',
      idealFor: 'Ιδανική για',
      stepsTitle: 'Η διαδρομή',
      observations: 'Τι να προσέξετε',
      tipsTitle: 'Πρακτικές συμβουλές',
      summaryTitle: 'Τι προτείνουμε;',
      summary: 'Για τους περισσότερους καλεσμένους προτείνουμε πτήση προς Αθήνα και ενοικίαση αυτοκινήτου, για εύκολη άφιξη, μετακινήσεις στην περιοχή και επιστροφή.',
      note: 'Οι τιμές και οι χρόνοι είναι ενδεικτικοί και αλλάζουν ανάλογα με την εποχή και τη διαθεσιμότητα. Τα ποσά αναφοράς δεν είναι επιβεβαιωμένες τιμές για τον Αύγουστο του 2027. Η πτήση δεν περιλαμβάνεται.',
      sourcesTitle: 'Δρομολόγια και κρατήσεις',
      routes: [
        [
          'Βαρκελώνη',
          'Αθήνα',
          'Αίγιο'
        ],
        [
          'Βαρκελώνη',
          'Ρώμη',
          'Ιόνια νησιά',
          'Πάτρα',
          'Αίγιο'
        ]
      ],
      routeNote: 'Ενδεικτικό σχήμα: η διαδρομή μέσω των νησιών εξαρτάται από τις διαθέσιμες πτήσεις και ακτοπλοϊκές συνδέσεις.',
      options: [
        {
          id: 'economy',
          title: 'Επιλογή 1 · Οικονομική',
          badge: 'Πιο οικονομική',
          description: 'Πτήση προς Αθήνα και λεωφορεία μέχρι το Αίγιο, χωρίς ενοικίαση αυτοκινήτου.',
          comfort: 'Με μετεπιβιβάσεις',
          cost: 'Χαμηλό',
          time: 'Ανάλογα με συνδέσεις και κίνηση',
          flow: [
            'Πτήση',
            'Λεωφορείο X93',
            'ΚΤΕΛ',
            'Υπεραστικό λεωφορείο',
            'Αίγιο'
          ],
          steps: [
            {
              title: 'Βαρκελώνη → Αθήνα',
              items: [
                'Πτήση προς το αεροδρόμιο της Αθήνας.'
              ]
            },
            {
              title: 'Από το αεροδρόμιο στο ΚΤΕΛ',
              items: [
                'X93 → σταθμός ΚΤΕΛ Κηφισού. Η πιο πρακτική επιλογή για συνέχεια προς Αίγιο.',
                'X95 → πλατεία Συντάγματος. Για μια επίσκεψη στο κέντρο· μετά χρειάζεται ξεχωριστή μετακίνηση προς το ΚΤΕΛ.',
                'Λεωφορείο αεροδρομίου: περίπου 6 € ως ποσό αναφοράς.'
              ]
            },
            {
              title: 'ΚΤΕΛ → Αίγιο',
              items: [
                'Ζητήστε εισιτήριο για Αίγιο και επιβεβαιώστε ποιο δρομολόγιο προς Πάτρα σταματά εκεί.',
                'Υπεραστικό λεωφορείο: περίπου 18 € ως ποσό αναφοράς. Επιβεβαιώστε τιμή και στάση πριν το ταξίδι.'
              ]
            }
          ],
          facts: [
            {
              label: 'Λεωφορείο αεροδρομίου',
              value: '≈ 6 €'
            },
            {
              label: 'Υπεραστικό λεωφορείο',
              value: '≈ 18 €'
            }
          ],
          notes: [
            'Ελέγξτε τα δρομολόγια και αφήστε χρόνο μεταξύ πτήσης και λεωφορείου.',
            'Δηλώστε πάντα το Αίγιο ως προορισμό στο εκδοτήριο.'
          ],
          ideal: 'Όσους θέλουν οικονομία και δεν τους πειράζουν οι δημόσιες συγκοινωνίες.',
          conclusion: 'Η οικονομική λύση για άφιξη χωρίς αυτοκίνητο.'
        },
        {
          id: 'recommended',
          title: 'Επιλογή 2 · Προτεινόμενη',
          badge: 'Η πρότασή μας',
          description: 'Πτήση προς Αθήνα και ενοικίαση αυτοκινήτου στο αεροδρόμιο, για ελευθερία σε όλη τη διαμονή.',
          comfort: 'Υψηλή',
          cost: 'Ενοικίαση + έξοδα',
          time: '≈ 2 ώρες οδήγησης',
          flow: [
            'Πτήση',
            'Ενοικίαση αυτοκινήτου',
            'Αίγιο'
          ],
          steps: [
            {
              title: 'Βαρκελώνη → Αθήνα',
              items: [
                'Πτήση προς το αεροδρόμιο της Αθήνας.'
              ]
            },
            {
              title: 'Παραλαβή αυτοκινήτου στο αεροδρόμιο',
              items: [
                'Κάντε κράτηση αρκετούς μήνες νωρίτερα.',
                'Συγκρίνετε επιλογές στο Skyscanner και δείτε κρατήσεις στα Rentalcars ή DiscoverCars.',
                'Επιλέξτε πλήρη ασφαλιστική κάλυψη και απεριόριστα χιλιόμετρα· ελέγξτε τους όρους.'
              ]
            },
            {
              title: 'Οδήγηση μέχρι το Αίγιο',
              items: [
                'Υπολογίστε περίπου 2 ώρες, ανάλογα με την κίνηση.',
                'Προτιμήστε τους αυτοκινητοδρόμους: έχουν διόδια, αλλά διευκολύνουν τη διαδρομή και εξοικονομούν χρόνο.'
              ]
            }
          ],
          facts: [
            {
              label: 'Αεροδρόμιο → Αίγιο',
              value: '≈ 2 ώρες'
            },
            {
              label: 'Ενδεικτική βενζίνη',
              value: '≈ 2 €/λ.'
            }
          ],
          notes: [
            'Υπολογίστε ενοικίαση, διόδια και καύσιμα· η τιμή της βενζίνης αλλάζει.',
            'Ελευθερία για άφιξη στο Αίγιο, παραλίες, κοντινά χωριά και επιστροφή στο αεροδρόμιο.'
          ],
          ideal: 'Όσους δίνουν προτεραιότητα στην άνεση και την ευελιξία.',
          conclusion: 'Η πιο άνετη και πρακτική επιλογή για τους περισσότερους.'
        },
        {
          id: 'adventure',
          title: 'Επιλογή 3 · Περιπέτεια',
          badge: 'Πιο περιπετειώδης',
          description: 'Συνδυάστε τον γάμο με ένα ταξίδι στα Ιόνια νησιά, στη δυτική Ελλάδα.',
          comfort: 'Περισσότερη οργάνωση',
          cost: 'Μεταβλητό',
          time: 'Ανάλογα με τη διαδρομή + ≈ 30 λεπτά από Πάτρα',
          flow: [
            'Πτήση με ανταπόκριση',
            'Ιόνιο νησί',
            'Πλοίο / σύνδεση',
            'Πάτρα',
            'Αυτοκίνητο',
            'Αίγιο'
          ],
          steps: [
            {
              title: 'Βαρκελώνη → Ρώμη → Ιόνια νησιά',
              items: [
                'Εξετάστε ανταπόκριση στη Ρώμη, ανάλογα με τις διαθέσιμες πτήσεις.',
                'Κέρκυρα, Λευκάδα και Κεφαλονιά είναι ιδέες για τη διαδρομή· ελέγξτε το αεροδρόμιο πρόσβασης και τις συνδέσεις κάθε νησιού.',
                'Οργανώστε έγκαιρα διαμονή και μετακινήσεις στο νησί.'
              ]
            },
            {
              title: 'Σύνδεση με την ηπειρωτική Ελλάδα',
              items: [
                'Ελέγξτε λιμάνι και πλοίο ανά νησί: δεν έχουν όλα απευθείας σύνδεση με την Πάτρα.',
                'Για την Κεφαλονιά, δείτε τη γραμμή Σάμη–Πάτρα.',
                'Πλοίο: 15–20 € ως αρχικό ποσό αναφοράς, με επιβεβαίωση ανά διαδρομή· δεν είναι κοινή τιμή για όλα τα νησιά.'
              ]
            },
            {
              title: 'Πάτρα → Αίγιο → Αθήνα',
              items: [
                'Νοικιάστε αυτοκίνητο στην Πάτρα και οδηγήστε περίπου 30 λεπτά ως το Αίγιο.',
                'Ρωτήστε αν επιτρέπεται επιστροφή στο αεροδρόμιο της Αθήνας και αν υπάρχει επιπλέον χρέωση.',
                'Μετά τον γάμο, επιστρέψτε μέσω Αθήνας, ίσως με μια επίσκεψη στην πόλη πριν την πτήση για Βαρκελώνη.'
              ]
            }
          ],
          facts: [
            {
              label: 'Ενδεικτικό πλοίο',
              value: '≈ 15–20 €'
            },
            {
              label: 'Πάτρα → Αίγιο',
              value: '≈ 30 λεπτά'
            }
          ],
          notes: [
            'Συντονίστε πτήσεις, διαμονή, πλοία και αυτοκίνητο πριν κάνετε κρατήσεις.',
            'Η διαδρομή και το κόστος εξαρτώνται από το νησί και τις διαθέσιμες συνδέσεις.'
          ],
          ideal: 'Όσους θέλουν να παρατείνουν το ταξίδι και να γνωρίσουν νησιά και άλλες περιοχές.',
          conclusion: 'Η επιλογή για να συνδυάσετε τον γάμο με διακοπές στην Ελλάδα.'
        }
      ],
      tips: [
        'Κλείστε αυτοκίνητο εγκαίρως.',
        'Προτιμήστε αυτοκινητοδρόμους για εξοικονόμηση χρόνου.',
        'Δηλώστε Αίγιο στο εκδοτήριο του ΚΤΕΛ.',
        'Ελέγξτε δρομολόγια λεωφορείων και πλοίων.',
        'Υπολογίστε διόδια και καύσιμα.',
        'Για τους περισσότερους, αυτοκίνητο από Αθήνα.'
      ]
    },
    nav: {
      information: 'Πληροφορίες',
      mainNavigation: 'Κύρια πλοήγηση',
      openMenu: 'Άνοιγμα μενού: Πληροφορίες',
      closeMenu: 'Κλείσιμο μενού: Πληροφορίες',
      venue: 'Τοποθεσία και πρόσβαση',
      program: 'Πρόγραμμα',
      travel: 'Ταξίδι στην Ελλάδα',
      accommodation: 'Διαμονή',
      cultureFood: 'Έθιμα και γαστρονομία',
      localPlaces: 'Μέρη στην περιοχή',
    },
    location: 'Αίγιο · Ελλάδα',
    languageSelector: 'Γλώσσα',
  },
}
