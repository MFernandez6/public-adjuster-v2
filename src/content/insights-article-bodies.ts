import type { InsightSlug } from "@/lib/insights";

/** Long-form Insight copy (SEO / trust). Review with counsel where legal claims appear. */

type Loc = "en" | "es";

const bodies: Record<InsightSlug, Record<Loc, string[]>> = {
    "hurricane-claim-tips": {
        en: [
            "Hurricane damage claims in Florida are won or lost inside the policy details and the contemporaneous proof. Boards and shutters may mitigate risk, but they do not remove the insurer’s contractual duties after a qualifying event. Successful policyholders assemble a chronological record tying damage to peril, correlate photo and measurement evidence with the policy’s covered perils section, and map losses to estimating line items insurers can scrutinize.",
            "Four practical moves before the peak of season: locate your deductible and wind/hazard endorsements, photograph pre-season roof and envelope baseline, enroll for electronic loss notices via your insurer’s portal without waiving supplemental rights later, and pre-select a remediation partner who understands documentation standards rather than demolition speed alone.",
            "After wind entry, stabilize the premises for safety yet preserve evidence lanes for investigation. Separate contents from structure where coverage lines differ and keep salvage until an agreed disposition is documented.",
            "If you stall on proof-of-loss timelines or scope disagreements early, supplemental authority erodes quickly. Licensing law governs contingent representation; keep written fee disclosures accessible and avoid informal scope reductions over the telephone without file confirmation.",
            "Blackline PA treats hurricane files as underwriting investigations in reverse—the policy language anchors every demand. If denial or underpayment threatens your mortgage or repair math, escalate with disciplined documentation.",
        ],
        es: [
            "En Florida las reclamaciones por huracán se ganan o pierden por la evidencia contemporánea y la letra de la póliza. Los elementos de protección pueden mitigar daño pero no extinguen las obligaciones contractuales. Los asegurados que mejor resultados obtienen crean líneas de tiempo, emparejan fotos con la causa del daño y alinean el alcance al lenguaje de coberturas y endosos.",
            "Cuatro pasos útiles antes del pico: identifique deducible y endosos de viento/huracán, documente estado previo del techo y envolvente, active avisos electrónicos sin renunciar a suplementos, y coordine equipos de mitigación que respalden registros—not solo rapidez de demoler.",
            "Tras entrada de viento, estabilice con seguridad y preserve evidencia. Separe contenido y estructura cuando las coberturas difieren y registre cualquier decisión sobre salvamento.",
            "Demoras en probanza o reducciones de alcance sin respaldo escritos erosionan recuperación rápido. Mantenga disclosure de honorarios y evite alcances verbales no reflejados en el expediente.",
            "Blackline PA aborda estos archivos con rigor contractual; si enfrenta pago incompleto, la documentación disciplinada es el contrapeso efectivo ante la aseguradora.",
        ],
    },
    "six-reasons-hire-public-adjuster": {
        en: [
            "A licensed Florida public adjuster owes duties to you—the insured—not the insurer. That alignment matters when exclusions, depreciation arguments, or engineering reviews attempt to squeeze scope.",
            "Policy interpretation is conversational at adjusters’ desks but adjudicated in underwriting standards. Representation helps translate vague endorsements into defensible estimating packages.",
            "Deadlines abound: sworn proof timelines, reinspection notices, supplemental windows. Dedicated representation tracks correspondence formally so inertia is not mistaken for acceptance.",
            "Estimating integrity is more than lump sums—it is line-by-line economics tied to market repair costs and code-driven upgrades.",
            "Insurers deploy counsel and vendor panels; symmetry on documentation keeps negotiations evidentiary rather than positional.",
            "Contingency models align incentive with favorable settlement but require explicit written disclosures—Blackline PA aligns both.",
        ],
        es: [
            "Un ajustador público de seguros licenciado en Florida representa sus intereses, no los del asegurador; eso marca la diferencia con exclusiones, depreciaciones o ingenierías cuestionando el alcance.",
            "Interpretar coberturas requiere alinear lenguaje de póliza con estimación defendible—not solo declaraciones.",
            "Plazos (prueba de pérdida, vistas, suplementos) se pierden si la correspondencia descuidada deja huecos estratégicos.",
            "Un estimado sólido liga económía real de reparación y ordenanzas con la póliza—no valores redondos retóricos.",
            "Las aseguradoras mueven equipos de defensa u ingeniería; simetría documental mantiene la negociación en hechos.",
            "Honorarios contingentes están regulados por escrito; Blackline PA comunica ese marco con transparencia.",
        ],
    },
    "public-adjuster-fees-negotiable": {
        en: [
            "Compensation must be conspicuous, written, and consistent with statute before you authorize representation—Florida regulates fee caps broadly between catastrophe and non-catastrophe contexts; confirm classifications with your executing agreement.",
            "Negotiability does not waive regulatory ceilings; negotiate scope of services, escalation protocols, withdrawal rights, expense handling, but keep caps visible.",
            "Ask what triggers invoicing—is it purely collected dollars, installments, escrow releases? Ambiguity favors disputes later.",
            "Supplement workflows may trigger additional estimating cycles—understand whether re-openings incur additional economics.",
            "Blackline PA aligns fees to milestones recoverable consistent with DFS guidance and contemporaneous statutes—request the schedule explicitly before binding.",
        ],
        es: [
            "Honorarios por escrito y conforme a los topes aplicables—notifique contexto catastrófico vs ordinario antes de autorizar.",
            "Negociar microalcances de servicios no sustituye techo legal cuando aplique clasificación DFS.",
            "Defina disparadores—¿únicamente monto efectivamente recuperado?, ¿honorarios de reabierta?, ¿honorarios de suplementos?",
            "La ambigüedad genera reclamaciones internas después; exija línea de tiempo y documentación paralela.",
            "Blackline PA estructura acuerdos con claridad estadounidense y estadístico DFS vigente solicite tabla escrita antes de firma.",
        ],
    },
    "documentation-that-moves-the-file": {
        en: [
            "Carriers adjudicate asynchronously—your file must speak when you cannot. Indexed photo sets, directional moisture diagrams, sequencing notes, dated correspondence logs, and third-party remediation invoices each answer predictable audit questions preemptively.",
            "Estimates annotated with justification notes convert silent line items into narrative defense—explain why removals exceed minimums.",
            "Preserve chain-of-custody on specialty testing and avoid orphaned lab reports unattached to cause mapping.",
            "When demands stall, escalate with structured timelines citing internal handling benchmarks without threatening tone—in writing.",
            "Blackline PA organizes evidence so underwriting reviews encounter fewer blanks—fewer blanks reduce denials camouflaged as information requests.",
        ],
        es: [
            "El expediente habla cuando usted ya no puede: fotografía indexada, mapas direccionales, bitácoras de correspondencia fechadas y respaldo de especialistas cerrando lagunas esperadas.",
            "Estimaciones con notas narrativas explican desmontes y mínimos industriales—not solo número final.",
            "Pruebas de laboratorio necesitan causa y método trazados; informes huérfanos generan rechazos rápidos.",
            "Las solicitudes escritas cronometradas (sin intimidación ilegal) forzan movimiento institucional legítimo.",
            "Blackline PA ordena evidencia minimizando puntos oscuros antes de segunda revisión ingeniería o legal adjunta.",
        ],
    },
    "storm-claim-mistakes": {
        en: [
            "Deferring mitigation invites subsequent damage arguments—document immediate temporary repairs and spend proportionality reasoning.",
            "Accepting verbally narrow scopes without contemporaneous estimating supplements surrenders leverage silently.",
            "Single vantage photo sets miss directional wind vectors—capture orientation metadata when practical.",
            "Hidden interior damage emerges after tarp removal—schedule progressive inspections rather than settling envelope-only.",
            "Unverified contractor invoices lacking line-item correlation face haircutting scrutiny—tie spend to causation narratives.",
            "Blackline PA sequences inspections to preempt ‘late reporting’ exclusions where timing facts support coverage.",
        ],
        es: [
            "Mitigación tardía se usa para negar consecuencias posteriores; documente urgencia y proporcionalidad económica.",
            "Ámbitos por teléfono sin soporte escritos reducen recuperación antes de iniciar obra.",
            "Fotografía sin dirección meteorológico ignora argumentos vetoriales de viento lateral.",
            "Daño interior aparece tardío—inspeccionar en capas retrasa errores liquidación incompleta prematura.",
            "Facturas agrupadas sin correlación sufren rebajas agresivas línea por línea.",
            "Blackline PA agenda inspección en fases disminuyendo alegatos de tiempo extemporáneo falsos ante hechos verdaderos.",
        ],
    },
    "wind-claim-documentation": {
        en: [
            "Discrete failure patterns—tab lifted at corners versus uniform membrane stress—support divergent peril theories; macro plus micro imagery secures differentiation.",
            "Gauge uplift exposure with fastening schedule references when fasteners are visibly compromised.",
            "Contents affected by intrusion require inventory discipline—carrier contents teams discount vague lists.",
            "Engineering overlays should map code upgrade triggers before settlement conversations stall on ordinance misunderstandings.",
            "Blackline PA cross-links environmental data (storm swaths) with site-specific uplift observations defensibly—not rhetorically.",
        ],
        es: [
            "Patrones de falla granular—esquinas levantadas vs tensión de membrana uniforme—fundamentan causalidad distinta; combine vistas macro y primeros planos cercanos bien iluminados.",
            "Registros de fijación relevantes ante desplume parcial establecen vínculos estructura-viento cuando corresponden.",
            "Contenidos requieren inventario discriminado—not genéricidades.",
            "Ordenanzas y mejoras código anticipadas antes de negociaciones finales evitan retrabajo de suplementos evitables.",
            "Blackline PA cruza información meteorológica con observación local defendible—not opinion vaga.",
        ],
    },
    "sudden-vs-gradual-water-damage": {
        en: [
            "Water coverage lines distinguish fortuity from maintenance neglect—carrier engineers examine hydroscopic progression, chloride signatures, layering of staining, substrate saturation curves.",
            "Document moisture mapping soon after discovering conditions but before wholesale gutting destroys interpretive strata.",
            "Plumbing bursts versus seepage timelines carry distinct proof burdens—articulate chronological discovery statements carefully.",
            "Policy endorsements altering mold sublimits interplay—integrate hygienist sequencing early.",
            "Blackline PA coordinates specialists when scientific differentiation supports—not theatrically inflates—a covered pathway.",
        ],
        es: [
            "Sudden vs gradual marca coberturas; ingenierías analizan progresión de humedad, sellos temporales químicos y narrativas mantenimiento vs fortuito.",
            "Mapear humedad antes de demolición preserva historia útil—not desecharla rápido ignorando causa.",
            "Rotura tuberías vs infiltración tienen cargas probatorias distintas; redacte descubrimiento con fechas específicas.",
            "Limitaciones moho modifican económico; higienistas tempranos reducen rechazos retardados.",
            "Blackline PA alinea especialistas sólo donde fortalezcan narrativa—not adorno superfluo.",
        ],
    },
    "fire-claims-structure-contents": {
        en: [
            "Structural char depth sampling plus contents chronological inventory interplay—total loss classifications pivot on depreciation methodology and salvage rights.",
            "Smoke migration through HVAC can expand scope geographically—diagram pathway evidence.",
            "Business income / extra expense interplay for commercial exposures requires segregation of timelines vs property repair sequencing.",
            "Policyholders often underestimate code upgrade exposure post-fire teardown—coordinate ordinance research early.",
            "Blackline PA models parallel documentation streams minimizing cross-contamination of assumptions between structure and belongings.",
        ],
        es: [
            "Incendios mezclan muestras profundidad carbonización con inventarios detallados; clasificación total vs parcial varía método depreciación y salvamento.",
            "Humo en ductos distribuye pérdidas aparentemente colaterales; diagramar rutas HVAC refuerza.",
            "Rentas pérdidas comerciales requieren desacoples temporales obra vs flujo económico operativo—not mezclas confusión.",
            "Mejoras por código pueden inflar después de demolición inicial—anticipe investigación ordenanza.",
            "Blackline PA flujos paralelos evitan trasladar hipótesis estructura a contenidos erroneamente.",
        ],
    },
    "hail-roofs-investment": {
        en: [
            "Hail bruising manifests microfractures not uniformly visible aerially—paired macro plus close-up angled lighting reveals pattern density.",
            "Maintenance history defeats ‘wear and exclusion’ hybrids—preserve replacement invoices and maintenance logs.",
            "Carrier engineering may extrapolate systemic age—counter with specimen-specific tactile testing documentation.",
            "Functional vs cosmetic arguments pivot on impairment of water-shedding—tie testing to ASTM-style reasoning when warranted.",
            "Blackline PA inventories strike zones systematically so random sampling critiques cannot negate entire slopes unfairly.",
        ],
        es: [
            "Granizo microscopicamente fractura laminas asfálticas; iluminación rasa revela agrupamiento impactos.",
            "Historial mantenimiento destruye narrativas desgaste puro ante documentación válida anterior.",
            "Ingeniería de asegurador puede generalizar por edad; contrarrestar con muestras específicas tactiles.",
            "Funcional versus cosmético vincúlese impermeabilidad—no sólo estético superficial aleatorio.",
            "Blackline PA zonifica pendientes antes de muestrario sesgado anula pendiente entera equivocamente.",
        ],
    },
    "how-public-adjuster-strengthens-file": {
        en: [
            "Alignment between policy operative provisions, sworn statements, estimating platforms, and engineering letters reduces iterative revision loops.",
            "Centralized correspondence prevents contradictory admissions across adjusters rotating on the file.",
            "Forensic structuring anticipates underwriting escalations—you answer next questions preemptively.",
            "Blackline PA treats each demand package as appellate-ready—even if negotiation resolves early, thoroughness lowers downstream litigation spend risk.",
            "Credibility emerges from repeatable methodology insurers cannot trivially caricature.",
        ],
        es: [
            "Alinear declaraciones juradas con estimaciones y dictámenes reduce bucles revisión retardada.",
            "Correspondencia centralizada evita contradicciones inadvertidas por rotaciones internas ajusteras adversas.",
            "Estructura forense anticipa segunda ingeniería o escalación legal—not improvisación tardía.",
            "Blackline PA empaqueta demandas nivel apelatorio aun cuando negociación cierre rápido—descarta sorpresa probatoria después.",
            "Metodología repetible reputacionalmente seria—not narrativa melodramática—incentiva cumplimiento transaccional mejor.",
        ],
    },
    "total-loss-vs-partial": {
        en: [
            "Valuation method (RCV, ACV) plus ordinance demolition thresholds interact with total classifications—carrier labels aren’t destiny until math finishes.",
            "Mortgagee rights can complicate settlement routing—coordinate endorsements affecting disbursement timelines.",
            "Salvage valuation credits affect net payouts—inspect assumptions on retained materials.",
            "Depreciation reversal triggers upon repairs completion—track substantiation checkpoints.",
            "Blackline PA verifies each mathematical layer before labeling acceptance—prevent silent ACV trapping.",
        ],
        es: [
            "Valoración método y ordenanzas definen pérdidas totales efectivas—not sólo etiqueta carrier superficial.",
            "Derechos acreedores hipotecarios alteran desembolso y calendarios; anticipar endorsos multititular.",
            "Créditos salvamento modifican redes finales—not olvidarlos inadvertidamente.",
            "Recuperación depreciación supone prueba finalización obra—document milestones.",
            "Blackline PA revisa estratos matemáticos antes aceptaciones verbales evitando cierres ACV injustos inadvertidos.",
        ],
    },
    "deductible-planning": {
        en: [
            "Deductibles may stack seasonally across multiple covered events—aggregate annual exposure matters for cash-flow planning alongside mortgage obligations.",
            "Percentage-based wind deductibles transform with dwelling limit adjustments—sync endorsements annually.",
            "Commercial policies may embed waiting periods depressing business income timelines—coordinate documentation parallel to property proofs.",
            "Coinsurance misconceptions generate post-loss penalties—analyze statement of values preemptively annually.",
            "Blackline PA aligns tactical claim segmentation when multiple peril windows overlap—prevent accidental election of disadvantageous sequencing.",
        ],
        es: [
            "Deducibles pueden acumularse evento múltiple misma temporada; planificación flujo efectivo—not sólo primera tormenta aislada.",
            "Deducible porcentual cambia cuando aseguranza sustituye vivienda; sincronizar endosos anualmente recomendación.",
            "Póliza comercial periodos espera lucro cesante desfasados documentación paralela—not secuencial reactiva.",
            "Cláusulas coaseguro penalizaciones por infraseguro—valoraciones previas prudentes profesionales—not improvisación después.",
            "Blackline PA ordena estrategias multiperíodo evitando elecciones perjudiciales secuenciación—not mezclas descuidadas.",
        ],
    },
};

export function getInsightBody(slug: InsightSlug, locale: Loc): string[] | undefined {
    return bodies[slug]?.[locale];
}