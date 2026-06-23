const form = document.querySelector('#ideaForm');
const results = document.querySelector('#results');
const scoreOutput = document.querySelector('#score');
const recommendationOutput = document.querySelector('#recommendation');
const explanationOutput = document.querySelector('#explanation');
const weakPointsOutput = document.querySelector('#weakPoints');
const nextStepsOutput = document.querySelector('#nextSteps');
const assumptionsOutput = document.querySelector('#assumptions');
const marketSignalsOutput = document.querySelector('#marketSignals');
const validationNeededOutput = document.querySelector('#validationNeeded');
const evidenceSummaryOutput = document.querySelector('#evidenceSummary');
const evidenceFeedbackOutput = document.querySelector('#evidenceFeedback');
const suggestedMvpOutput = document.querySelector('#suggestedMvp');
const futureFeaturesOutput = document.querySelector('#futureFeatures');
const userMotivationOutput = document.querySelector('#userMotivation');
const marketEntryOutput = document.querySelector('#marketEntry');
const keyRisksOutput = document.querySelector('#keyRisks');
const validationQuestionsOutput = document.querySelector('#validationQuestions');
const demandQueriesOutput = document.querySelector('#demandQueries');
const trendsQueriesOutput = document.querySelector('#trendsQueries');
const competitorQueriesOutput = document.querySelector('#competitorQueries');
const reviewQueriesOutput = document.querySelector('#reviewQueries');
const researchQueryNoteOutput = document.querySelector('#researchQueryNote');
const competitorChecklistOutput = document.querySelector('#competitorChecklist');
const evidenceToCollectOutput = document.querySelector('#evidenceToCollect');
const researchRedFlagsOutput = document.querySelector('#researchRedFlags');
const interestInput = document.querySelector('#personalInterest');
const confidenceInput = document.querySelector('#confidence');
const languageInput = document.querySelector('#language');
const interestValue = document.querySelector('#interestValue');
const confidenceValue = document.querySelector('#confidenceValue');

const minimumUsefulLengths = { ideaDescription: 60, targetAudience: 20, userPain: 35, monetization: 28, evidence: 45 };
const languages = {
  en: {
    ui: {
      eyebrow: 'First prototype', intro: 'Evaluate a digital product idea before you spend time building it. Fill in the form, then get a simple score, recommendation, weak points, next steps, product expansion guidance, and market research prompts.', languageLabel: 'Output language', languageHelp: 'Changes recommendations, explanations, weak points, next steps, product expansion, and evidence assessment.', researchQueryLanguageLabel: 'Research query language', researchQueryLanguageHelp: 'Controls only generated Google, Trends, competitor, Reddit/forum, and review queries.', ideaInputEyebrow: 'Idea basics', ideaInputTitle: 'Core idea inputs', ideaNameLabel: 'Idea name', ideaDescriptionLabel: 'Idea description', researchEyebrow: 'Research mode', researchTitle: 'Market Research Assistant', researchProductIdeaLabel: 'Product idea', targetAudienceLabel: 'Target audience', userPainLabel: 'User pain or problem', monetizationLabel: 'Possible monetization', evidenceEyebrow: 'Validation notes', evidenceTitle: 'Evidence', searchDemandLabel: 'Search demand findings', competitorEvidenceLabel: 'Competitor findings', reviewEvidenceLabel: 'User review findings', pricingEvidenceLabel: 'Payment or pricing evidence', personalObservationsLabel: 'Personal observations', interestLabel: 'Personal interest', confidenceLabel: 'Information confidence', evaluateButton: 'Evaluate idea', resultEyebrow: 'Result', weakPointsTitle: 'Weak points', nextStepsTitle: 'Next steps', assumptionsTitle: 'Assumptions', marketSignalsTitle: 'Market signals', validationNeededTitle: 'Validation still needed', evidenceAssessmentTitle: 'Evidence Assessment', creatorLensEyebrow: 'Creator lens', productExpansionTitle: 'Product Expansion', suggestedMvpTitle: 'Suggested MVP', futureFeaturesTitle: 'Future features', userMotivationTitle: 'User motivation', marketEntryTitle: 'Market entry', keyRisksTitle: 'Key risks', validationQuestionsTitle: 'Validation questions', researchPlanEyebrow: 'No API research plan', researchOutputTitle: 'Market Research Assistant', researchQueryNote: 'For better English research queries, enter idea name and 2–3 keywords in English.', demandQueriesTitle: '5 Google search queries to research demand', trendsQueriesTitle: '3 Google Trends query suggestions', competitorQueriesTitle: '5 competitor search queries', reviewQueriesTitle: '5 review/reddit/forum research queries', competitorChecklistTitle: 'Competitor comparison checklist', evidenceToCollectTitle: 'Evidence to collect before trusting the idea', researchRedFlagsTitle: 'Red flags that would make the idea weaker' },
    recommendations: ['Postpone it', 'Improve it', 'Do it'],
    noMajorWeak: 'No major weak points found, but keep testing with real users before building too much.'
  },
  ru: {
    ui: {
      eyebrow: 'Первый прототип', intro: 'Оцените идею цифрового продукта до разработки. Заполните форму и получите оценку, рекомендацию, слабые места, следующие шаги, развитие продукта и подсказки для исследования рынка.', languageLabel: 'Язык результата', languageHelp: 'Меняет рекомендации, объяснения, слабые места, следующие шаги, развитие продукта и оценку доказательств.', researchQueryLanguageLabel: 'Язык поисковых запросов', researchQueryLanguageHelp: 'Меняет только запросы для Google, Trends, конкурентов, Reddit/форумов и отзывов.', ideaInputEyebrow: 'Основа идеи', ideaInputTitle: 'Основные данные', ideaNameLabel: 'Название идеи', ideaDescriptionLabel: 'Описание идеи', researchEyebrow: 'Режим исследования', researchTitle: 'Market Research Assistant', researchProductIdeaLabel: 'Идея продукта', targetAudienceLabel: 'Целевая аудитория', userPainLabel: 'Боль или проблема пользователя', monetizationLabel: 'Возможная монетизация', evidenceEyebrow: 'Заметки валидации', evidenceTitle: 'Доказательства', searchDemandLabel: 'Данные о поисковом спросе', competitorEvidenceLabel: 'Данные о конкурентах', reviewEvidenceLabel: 'Данные из отзывов пользователей', pricingEvidenceLabel: 'Данные об оплате или цене', personalObservationsLabel: 'Личные наблюдения', interestLabel: 'Личный интерес', confidenceLabel: 'Уверенность в информации', evaluateButton: 'Оценить идею', resultEyebrow: 'Результат', weakPointsTitle: 'Слабые места', nextStepsTitle: 'Следующие шаги', assumptionsTitle: 'Предположения', marketSignalsTitle: 'Рыночные сигналы', validationNeededTitle: 'Что еще нужно проверить', evidenceAssessmentTitle: 'Оценка доказательств', creatorLensEyebrow: 'Взгляд создателя', productExpansionTitle: 'Развитие продукта', suggestedMvpTitle: 'Рекомендуемый MVP', futureFeaturesTitle: 'Будущие функции', userMotivationTitle: 'Мотивация пользователя', marketEntryTitle: 'Выход на рынок', keyRisksTitle: 'Ключевые риски', validationQuestionsTitle: 'Вопросы для проверки', researchPlanEyebrow: 'План без API', researchOutputTitle: 'Market Research Assistant', researchQueryNote: 'For better English research queries, enter idea name and 2–3 keywords in English.', demandQueriesTitle: '5 поисковых запросов Google для проверки спроса', trendsQueriesTitle: '3 запроса для Google Trends', competitorQueriesTitle: '5 запросов для поиска конкурентов', reviewQueriesTitle: '5 запросов для отзывов/Reddit/форумов', competitorChecklistTitle: 'Чеклист сравнения конкурентов', evidenceToCollectTitle: 'Доказательства, которые нужно собрать', researchRedFlagsTitle: 'Красные флаги, которые ослабляют идею' },
    recommendations: ['Отложить', 'Улучшить', 'Делать'],
    noMajorWeak: 'Серьезных слабых мест не найдено, но продолжайте проверять идею на реальных пользователях.'
  }
};

function t(key, lang) { return languages[lang].ui[key]; }
function updateInterfaceLanguage(lang) { document.documentElement.lang = lang === 'ru' ? 'ru' : 'en'; document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n, lang); }); }
function updateRangeLabel(input, output) { output.textContent = input.value; }
function getTextScore(value, usefulLength) { const trimmedValue = value.trim(); return trimmedValue ? Math.min(10, Math.round((trimmedValue.length / usefulLength) * 10)) : 0; }
function getEvidenceItems(values) { return [values.searchDemandEvidence, values.competitorEvidence, values.reviewEvidence, values.pricingEvidence, values.personalObservations]; }
function getEvidenceScore(values) { const items = getEvidenceItems(values); const filled = items.filter((item) => item.trim().length > 0).length; const useful = items.filter((item) => item.trim().length >= minimumUsefulLengths.evidence).length; return { filled, useful, score: Math.min(10, Math.round(filled * 1.2 + useful * 1.1)) }; }
function getFormValues() { return { language: form.language.value, researchQueryLanguage: form.researchQueryLanguage.value, ideaName: form.ideaName.value.trim(), ideaDescription: form.ideaDescription.value.trim(), researchProductIdea: form.researchProductIdea.value.trim(), targetAudience: form.targetAudience.value.trim(), userPain: form.userPain.value.trim(), monetization: form.monetization.value.trim(), searchDemandEvidence: form.searchDemandEvidence.value.trim(), competitorEvidence: form.competitorEvidence.value.trim(), reviewEvidence: form.reviewEvidence.value.trim(), pricingEvidence: form.pricingEvidence.value.trim(), personalObservations: form.personalObservations.value.trim(), personalInterest: Number(form.personalInterest.value), confidence: Number(form.confidence.value) }; }
function isMonetizationVague(value) { const trimmedValue = value.trim().toLowerCase(); const wordCount = trimmedValue.split(/\s+/).filter(Boolean).length; const vagueTerms = ['maybe', 'not sure', 'unknown', 'tbd', 'ads', 'subscription', 'freemium', 'donations']; return trimmedValue.length < minimumUsefulLengths.monetization || wordCount < 4 || vagueTerms.some((term) => trimmedValue === term); }
function evaluateIdea(values) { const lang = values.language; const evidence = getEvidenceScore(values); const criteria = { description: getTextScore(values.ideaDescription, minimumUsefulLengths.ideaDescription), audience: getTextScore(values.targetAudience, minimumUsefulLengths.targetAudience), pain: getTextScore(values.userPain, minimumUsefulLengths.userPain), monetization: getTextScore(values.monetization, minimumUsefulLengths.monetization), monetizationIsVague: isMonetizationVague(values.monetization), interest: values.personalInterest, confidence: values.confidence, evidenceScore: evidence.score, evidenceFilled: evidence.filled, evidenceUseful: evidence.useful };
  const weightedScore = criteria.description * 1.1 + criteria.audience * 1.35 + criteria.pain * 1.8 + criteria.monetization * 1.25 + criteria.interest * 0.9 + criteria.confidence * 1.6 + criteria.evidenceScore * 2.6;
  const noEvidencePenalty = criteria.evidenceFilled === 0 ? 18 : 0; const weakEvidencePenalty = criteria.evidenceFilled > 0 && criteria.evidenceScore < 5 ? 7 : 0; const confidencePenalty = criteria.confidence <= 6 ? (6 - criteria.confidence) * 2 : 0; const monetizationPenalty = criteria.monetizationIsVague ? 4 : 0;
  const rawScore = Math.max(0, Math.round(weightedScore - noEvidencePenalty - weakEvidencePenalty - confidencePenalty - monetizationPenalty)); const scoreCap = criteria.evidenceFilled === 0 ? 58 : criteria.evidenceScore < 5 ? 68 : criteria.confidence <= 6 ? 78 : 100; const score = Math.min(rawScore, scoreCap);
  const recommendation = getRecommendation(score, lang); return { score, recommendation, weakPoints: getWeakPoints(criteria, lang), nextSteps: getNextSteps(criteria, values, lang), assumptions: getAssumptions(values, lang), marketSignals: getMarketSignals(values, criteria, lang), validationNeeded: getValidationNeeded(values, criteria, lang), evidenceAssessment: getEvidenceAssessment(criteria, values, lang), productExpansion: getProductExpansion(criteria, values, score, lang), marketResearch: getMarketResearch(values, values.researchQueryLanguage, lang), explanation: getExplanation(score, recommendation.label, values.ideaName, criteria, lang) }; }
function getRecommendation(score, lang) { const recs = languages[lang].recommendations; if (score >= 80) return { label: recs[2], className: 'recommend-do' }; if (score >= 55) return { label: recs[1], className: 'recommend-improve' }; return { label: recs[0], className: 'recommend-postpone' }; }
function getExplanation(score, recommendation, ideaName, criteria, lang) { const name = ideaName || (lang === 'ru' ? 'Эта идея' : 'This idea'); const evidenceText = lang === 'ru' ? `Уровень доказательств: ${criteria.evidenceFilled}/5 заполненных разделов.` : `Evidence level: ${criteria.evidenceFilled}/5 evidence sections filled.`; if (lang === 'ru') return `${name}: оценка ${score}/100. Рекомендация: ${recommendation}. Оценка осторожная, потому что идея отделяет предположения от реальных рыночных сигналов. ${evidenceText}`; return `${name} scores ${score}/100. Recommendation: ${recommendation}. The score stays conservative until assumptions are supported by real market signals. ${evidenceText}`; }
function getWeakPoints(c, lang) { const ru = lang === 'ru'; const points = []; if (c.audience < 7) points.push(ru ? 'Целевая аудитория пока описана слишком широко.' : 'The target audience is not specific enough yet.'); if (c.pain < 7) points.push(ru ? 'Боль пользователя нужно сделать яснее и сильнее.' : 'The user pain or problem needs to be clearer and stronger.'); if (c.description < 7) points.push(ru ? 'Первую версию идеи нужно описать проще и конкретнее.' : 'The first version of the idea needs a clearer and simpler description.'); if (c.monetizationIsVague) points.push(ru ? 'Монетизация слишком расплывчатая, поэтому неясно, как спрос станет выручкой.' : 'The business model is unclear because the monetization plan is too vague or short.'); if (c.evidenceFilled === 0) points.push(ru ? 'Нет доказательств: оценка намеренно ограничена и консервативна.' : 'No evidence was added, so the score is intentionally capped and conservative.'); else if (c.evidenceScore < 5) points.push(ru ? 'Доказательства слабые или неполные: нужно больше фактов из поиска, конкурентов, отзывов и цен.' : 'Evidence is weak or incomplete: add more search, competitor, review, and pricing facts.'); if (c.interest < 6) points.push(ru ? 'Личный интерес низкий, из-за этого идею будет сложнее довести до результата.' : 'Your personal interest is low, which may make the idea harder to finish.'); if (c.confidence <= 6) points.push(ru ? 'Уверенность 6/10 или ниже: нужна дополнительная проверка реальными пользователями.' : 'Information confidence is 6/10 or lower, so the idea needs more validation.'); return points.length ? points : [languages[lang].noMajorWeak]; }
function getNextSteps(c, v, lang) { const ru = lang === 'ru'; const name = v.ideaName || (ru ? 'идеи' : 'the idea'); const steps = []; if (c.audience < 7) steps.push(ru ? 'Напишите одно предложение: кто именно часто сталкивается с этой проблемой.' : 'Write one sentence that describes exactly who has this problem.'); if (c.pain < 7) steps.push(ru ? 'Поговорите с 3 потенциальными пользователями о том, как они решают проблему сейчас.' : 'Talk to 3 potential users and ask how they currently solve this problem.'); if (c.evidenceFilled < 3) steps.push(ru ? 'Заполните минимум 3 раздела доказательств перед тем, как повышать доверие к идее.' : 'Fill at least 3 evidence sections before increasing trust in the idea.'); if (c.monetizationIsVague || c.monetization < 7) steps.push(ru ? 'Проверьте, платят ли пользователи уже за похожие решения.' : 'Check whether users already pay for similar solutions.'); steps.push(ru ? 'Найдите 3 альтернативы и сравните аудиторию, цену, обещание и отзывы.' : 'Find 3 existing alternatives and compare their audience, pricing, promise, and reviews.'); steps.push(ru ? `Определите минимальный тест для ${name}, который можно сделать за неделю.` : `Define the smallest testable version of ${name} you can finish this week.`); return steps; }
function getAssumptions(v, lang) { return lang === 'ru' ? [`${v.targetAudience || 'Аудитория'} действительно испытывает эту боль часто.`, `Пользователи захотят заменить текущий способ решения на ${v.ideaName || 'этот продукт'}.`, `Монетизация (${v.monetization || 'не указана'}) соответствует ожиданиям рынка.`] : [`${v.targetAudience || 'The audience'} actually experiences this pain often.`, `Users will switch from their current workaround to ${v.ideaName || 'this product'}.`, `The monetization plan (${v.monetization || 'not specified'}) matches market expectations.`]; }
function getMarketSignals(v, c, lang) { const signals = []; const ru = lang === 'ru'; if (v.searchDemandEvidence) signals.push(ru ? `Поиск: ${v.searchDemandEvidence}` : `Search demand: ${v.searchDemandEvidence}`); if (v.competitorEvidence) signals.push(ru ? `Конкуренты: ${v.competitorEvidence}` : `Competitors: ${v.competitorEvidence}`); if (v.reviewEvidence) signals.push(ru ? `Отзывы: ${v.reviewEvidence}` : `Reviews/forums: ${v.reviewEvidence}`); if (v.pricingEvidence) signals.push(ru ? `Оплата/цена: ${v.pricingEvidence}` : `Payment/pricing: ${v.pricingEvidence}`); if (v.personalObservations) signals.push(ru ? `Наблюдения: ${v.personalObservations}` : `Observations: ${v.personalObservations}`); if (!signals.length) signals.push(ru ? 'Рыночные сигналы пока не добавлены.' : 'No market signals have been added yet.'); if (c.evidenceScore >= 7) signals.push(ru ? 'Доказательства повышают уверенность в оценке.' : 'The evidence increases confidence in the score.'); return signals; }
function getValidationNeeded(v, c, lang) { return lang === 'ru' ? ['Проверить объем и стабильность поискового спроса.', 'Подтвердить, что конкуренты зарабатывают или активно привлекают пользователей.', 'Найти повторяющиеся жалобы в отзывах, Reddit или форумах.', 'Получить хотя бы один сильный сигнал оплаты, предзаказа или готовности платить.'] : ['Check the size and consistency of search demand.', 'Confirm that competitors earn money or attract active users.', 'Find repeated complaints in reviews, Reddit, or forums.', 'Get at least one strong payment, preorder, or willingness-to-pay signal.']; }
function getEvidenceAssessment(c, v, lang) { const ru = lang === 'ru'; const summary = ru ? `Заполнено разделов доказательств: ${c.evidenceFilled}/5. Полезных подробных разделов: ${c.evidenceUseful}/5.` : `Evidence sections filled: ${c.evidenceFilled}/5. Detailed useful sections: ${c.evidenceUseful}/5.`; const feedback = []; if (c.evidenceFilled === 0) feedback.push(ru ? 'Без доказательств идея получает консервативную оценку, даже если описание звучит хорошо.' : 'With no evidence, the idea receives a conservative score even if the description sounds good.'); if (!v.searchDemandEvidence) feedback.push(ru ? 'Добавьте данные о поисковом спросе.' : 'Add search demand findings.'); if (!v.competitorEvidence) feedback.push(ru ? 'Добавьте данные о конкурентах и их позиционировании.' : 'Add competitor and positioning findings.'); if (!v.reviewEvidence) feedback.push(ru ? 'Добавьте повторяющиеся жалобы или желания из отзывов/форумов.' : 'Add repeated complaints or wishes from reviews/forums.'); if (!v.pricingEvidence) feedback.push(ru ? 'Добавьте доказательства оплаты, цены или готовности платить.' : 'Add payment, pricing, or willingness-to-pay evidence.'); if (c.evidenceScore >= 7) feedback.push(ru ? 'Доказательства выглядят достаточно сильными, чтобы повысить уверенность, но их все равно нужно перепроверить.' : 'Evidence looks strong enough to improve confidence, but it should still be verified.'); return { summary, feedback }; }
function getProductExpansion(c, v, score, lang) { const ru = lang === 'ru'; const audience = v.targetAudience || (ru ? 'целевой аудитории' : 'the target audience'); const problem = v.userPain || (ru ? 'заявленную проблему' : 'the stated problem'); const validate = c.evidenceScore < 7 || score < 70; return ru ? { suggestedMvp: validate ? `Не начинайте с полного продукта. Сначала сделайте ручной тест или лендинг для ${audience}, который обещает узкое решение проблемы: ${problem}.` : `Соберите один узкий сценарий для ${audience}, который решает главную боль и быстро собирает обратную связь или оплату.`, futureFeatures: ['История или прогресс только после доказанного повторного использования.', 'Шаблоны или автоматизация после явных запросов пользователей.', 'Интеграции после проверки основного сценария.'], userMotivation: `Пользователи могут захотеть продукт, если он экономит время, снижает усилия или делает проблему менее болезненной.`, marketEntry: ['Найдите сообщества, где аудитория уже обсуждает эту боль.', 'Предложите короткий проблемный оффер и измерьте ответы.', 'Запустите ручную concierge-версию для первых пользователей.'], keyRisks: ['Проблема может быть неприятной, но недостаточно срочной.', 'Существующие альтернативы могут решать главную боль достаточно хорошо.', 'Монетизация может не совпасть с привычками аудитории.'], validationQuestions: ['Кто испытывает проблему часто?', 'Что доказывает, что люди уже тратят деньги, время или усилия?', 'Какой недельный тест увеличит уверенность?'] } : { suggestedMvp: validate ? `Do not start with a full product. First make a manual test or landing page for ${audience} that promises one narrow solution to ${problem}.` : `Build one narrow workflow for ${audience} that solves the main pain and quickly asks for feedback or payment.`, futureFeatures: ['Saved history or progress only after repeated usage is proven.', 'Templates or automation after users clearly ask for faster workflow support.', 'Integrations after the core workflow is validated.'], userMotivation: 'Users might want this if it saves time, lowers effort, or makes the problem less frustrating.', marketEntry: ['Find communities where the audience already discusses this pain.', 'Post a short problem-focused offer and measure replies.', 'Run a manual concierge version for first users.'], keyRisks: ['The problem may be annoying but not urgent enough.', 'Existing alternatives may already solve the painful part well enough.', 'The monetization plan may not match audience habits.'], validationQuestions: ['Who has this problem often?', 'What proves people already spend money, time, or effort?', 'What one-week test would increase confidence?'] }; }
function uniqueItems(items, limit) {
  const seen = new Set();
  return items.map((item) => item.replace(/\s+/g, ' ').trim()).filter((item) => {
    const key = item.toLowerCase();
    if (!item || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, limit);
}
function shortPhrase(text, fallback, maxWords = 5) {
  const stopWords = new Set(['a', 'an', 'the', 'that', 'this', 'for', 'with', 'without', 'and', 'or', 'to', 'of', 'in', 'on', 'every', 'daily', 'helps', 'help', 'users', 'people', 'who', 'what', 'how', 'why', 'is', 'are', 'will', 'can', 'does', 'do']);
  const cleaned = (text || '').replace(/[^\p{L}\p{N}\s-]/gu, ' ').replace(/\s+/g, ' ').trim();
  const words = cleaned.split(' ').filter((word) => word && (!/^[a-z]+$/i.test(word) || !stopWords.has(word.toLowerCase())));
  return words.slice(0, maxWords).join(' ') || fallback;
}
function hasCyrillic(text) { return /[\u0400-\u04FF]/.test(text || ''); }
function englishPhrase(text, fallback, maxWords = 5) {
  const asciiOnly = (text || '').replace(/[^\x00-\x7F]/g, ' ');
  const phrase = shortPhrase(asciiOnly, '', maxWords);
  return phrase && !hasCyrillic(phrase) ? phrase : fallback;
}
function knownEnglishTerms(v) {
  const text = [v.ideaName, v.researchProductIdea, v.ideaDescription, v.targetAudience, v.userPain, v.searchDemandEvidence, v.competitorEvidence, v.reviewEvidence].join(' ').toLowerCase();
  const terms = [];
  if (/англий|english|conversation|speaking|говор/.test(text)) terms.push('English speaking practice', 'AI English tutor', 'English conversation practice', 'AI language tutor voice chat');
  if (/voice|chat|бот|bot|ai|ии|tutor|репетитор/.test(text)) terms.push('AI voice chat tutor');
  return terms;
}
function knownCompetitors(v) {
  const text = [v.competitorEvidence, v.reviewEvidence, v.searchDemandEvidence, v.ideaDescription].join(' ');
  const candidates = ['ELSA Speak', 'Praktika AI', 'TalkPal AI', 'Duolingo Max', 'BoldVoice'];
  return candidates.filter((name) => new RegExp(name.replace(/ /g, '\\s+'), 'i').test(text));
}
function safeEnglishBase(v) {
  const typed = englishPhrase(v.ideaName || v.researchProductIdea || v.ideaDescription, '', 5);
  const known = knownEnglishTerms(v);
  if (typed) return typed;
  if (known.length) return known[0];
  return 'product idea';
}
function englishQueries(v) {
  const base = safeEnglishBase(v);
  const terms = uniqueItems([base, ...knownEnglishTerms(v), englishPhrase(v.researchProductIdea, '', 5), englishPhrase(v.searchDemandEvidence, '', 5)].filter(Boolean), 8);
  const competitors = uniqueItems([...knownCompetitors(v), englishPhrase(v.competitorEvidence, '', 6)].filter(Boolean), 4);
  const demandFallbacks = ['English speaking practice app', 'AI English speaking tutor', 'English conversation practice app', 'practice English speaking without tutor', 'AI language tutor voice chat'];
  const trendsFallbacks = ['English speaking practice', 'AI English tutor', 'English conversation practice'];
  const competitorFallbacks = ['AI English speaking app alternatives', 'ELSA Speak alternatives', 'Praktika AI reviews', 'TalkPal AI pricing', 'Duolingo Max speaking practice'];
  const reviewFallbacks = ['site:reddit.com English speaking practice app', 'site:reddit.com AI English tutor', 'ELSA Speak complaints', 'Praktika AI review', 'TalkPal AI review'];
  const demand = uniqueItems([...terms.map((term) => `${term} app`), ...demandFallbacks], 5);
  const trends = uniqueItems([...terms, ...trendsFallbacks], 3);
  const competitor = uniqueItems([...competitors.map((name) => `${name} alternatives`), `${base} alternatives`, `${base} pricing`, ...competitorFallbacks], 5);
  const reviews = uniqueItems([`site:reddit.com ${base}`, ...terms.map((term) => `site:reddit.com ${term}`), ...competitors.map((name) => `${name} review`), ...reviewFallbacks], 5);
  return Object.fromEntries(Object.entries({ demandQueries: demand, trendsQueries: trends, competitorQueries: competitor, reviewQueries: reviews }).map(([key, items]) => [key, items.filter((item) => !hasCyrillic(item))]));
}
function russianQueries(v) {
  const idea = shortPhrase(v.ideaName || v.researchProductIdea || v.ideaDescription, 'идея продукта', 5);
  const product = shortPhrase(v.researchProductIdea || v.ideaName || v.ideaDescription, idea, 5);
  const audience = shortPhrase(v.targetAudience, 'целевая аудитория', 4);
  const pain = shortPhrase(v.userPain, 'боль пользователя', 5);
  const competitor = shortPhrase(v.competitorEvidence, product, 3);
  return {
    demandQueries: uniqueItems([`${idea} приложение`, `${product} сервис`, `${pain} решение`, `${audience} ${pain}`, `${product} спрос`], 5),
    trendsQueries: uniqueItems([idea, pain, `${audience} ${pain}`], 3),
    competitorQueries: uniqueItems([`${idea} аналоги`, `${competitor} альтернативы`, `${product} цена`, `${pain} сервис`, `лучшие приложения ${idea}`], 5),
    reviewQueries: uniqueItems([`${idea} отзывы`, `${competitor} жалобы`, `${product} обзор`, `site:reddit.com ${idea}`, `${product} цена`], 5)
  };
}
function makeQueries(v, queryLang) {
  return queryLang === 'en' ? englishQueries(v) : russianQueries(v);
}
function labelQueries(queries, label) {
  return Object.fromEntries(Object.entries(queries).map(([key, items]) => [key, items.map((item) => `${label}: ${item}`)]));
}
function mergeQueryGroups(groups) {
  return {
    demandQueries: groups.flatMap((group) => group.demandQueries),
    trendsQueries: groups.flatMap((group) => group.trendsQueries),
    competitorQueries: groups.flatMap((group) => group.competitorQueries),
    reviewQueries: groups.flatMap((group) => group.reviewQueries)
  };
}
function getMarketResearch(v, queryLang, outputLang) {
  const ru = outputLang === 'ru';
  const queryGroups = queryLang === 'both'
    ? mergeQueryGroups([labelQueries(makeQueries(v, 'en'), 'English'), labelQueries(makeQueries(v, 'ru'), 'Russian')])
    : makeQueries(v, queryLang);
  return { ...queryGroups, researchQueryNote: queryLang === 'en' || queryLang === 'both' ? languages[outputLang].ui.researchQueryNote : '', competitorChecklist: ru ? ['Кто целевая аудитория конкурента?', 'Какое главное обещание?', 'Сколько стоит и как монетизируется?', 'Что пользователи хвалят?', 'На что пользователи жалуются?'] : ['Who is the competitor targeting?', 'What is the main promise?', 'How is it priced and monetized?', 'What do users praise?', 'What do users complain about?'], evidenceToCollect: ru ? ['Повторяющиеся поисковые запросы или тренды.', '3–5 активных конкурентов или платных альтернатив.', 'Повторяющиеся жалобы из отзывов и форумов.', 'Данные о цене, оплате, предзаказах или бюджетах.', 'Интервью или наблюдения, подтверждающие срочность боли.'] : ['Repeated search queries or trend patterns.', '3–5 active competitors or paid alternatives.', 'Repeated complaints from reviews and forums.', 'Pricing, payment, preorder, or budget evidence.', 'Interviews or observations that prove urgency.'], researchRedFlags: ru ? ['Нет поиска и обсуждений проблемы.', 'Конкуренты есть, но пользователи не платят или быстро уходят.', 'Отзывы говорят, что проблема редкая или несрочная.', 'Аудитория слишком широкая или недоступная.', 'Пользователи хвалят идею, но не дают сигнал оплаты.'] : ['No search demand or discussion around the problem.', 'Competitors exist, but users do not pay or stay.', 'Reviews suggest the problem is rare or low urgency.', 'The audience is too broad or hard to reach.', 'Users compliment the idea but show no payment signal.'] };
}
function renderList(element, items) { element.innerHTML = ''; items.forEach((item) => { const listItem = document.createElement('li'); listItem.textContent = item; element.appendChild(listItem); }); }
function renderResults(evaluation) { scoreOutput.textContent = evaluation.score; recommendationOutput.textContent = evaluation.recommendation.label; recommendationOutput.className = evaluation.recommendation.className; explanationOutput.textContent = evaluation.explanation; renderList(weakPointsOutput, evaluation.weakPoints); renderList(nextStepsOutput, evaluation.nextSteps); renderList(assumptionsOutput, evaluation.assumptions); renderList(marketSignalsOutput, evaluation.marketSignals); renderList(validationNeededOutput, evaluation.validationNeeded); evidenceSummaryOutput.textContent = evaluation.evidenceAssessment.summary; renderList(evidenceFeedbackOutput, evaluation.evidenceAssessment.feedback); suggestedMvpOutput.textContent = evaluation.productExpansion.suggestedMvp; renderList(futureFeaturesOutput, evaluation.productExpansion.futureFeatures); userMotivationOutput.textContent = evaluation.productExpansion.userMotivation; renderList(marketEntryOutput, evaluation.productExpansion.marketEntry); renderList(keyRisksOutput, evaluation.productExpansion.keyRisks); renderList(validationQuestionsOutput, evaluation.productExpansion.validationQuestions); renderList(demandQueriesOutput, evaluation.marketResearch.demandQueries); renderList(trendsQueriesOutput, evaluation.marketResearch.trendsQueries); renderList(competitorQueriesOutput, evaluation.marketResearch.competitorQueries); renderList(reviewQueriesOutput, evaluation.marketResearch.reviewQueries); researchQueryNoteOutput.textContent = evaluation.marketResearch.researchQueryNote || ''; researchQueryNoteOutput.hidden = !evaluation.marketResearch.researchQueryNote; renderList(competitorChecklistOutput, evaluation.marketResearch.competitorChecklist); renderList(evidenceToCollectOutput, evaluation.marketResearch.evidenceToCollect); renderList(researchRedFlagsOutput, evaluation.marketResearch.researchRedFlags); results.classList.remove('is-hidden'); }
interestInput.addEventListener('input', () => updateRangeLabel(interestInput, interestValue));
confidenceInput.addEventListener('input', () => updateRangeLabel(confidenceInput, confidenceValue));
languageInput.addEventListener('change', () => updateInterfaceLanguage(languageInput.value));
form.addEventListener('submit', (event) => { event.preventDefault(); const values = getFormValues(); updateInterfaceLanguage(values.language); renderResults(evaluateIdea(values)); });
updateInterfaceLanguage(languageInput.value);
