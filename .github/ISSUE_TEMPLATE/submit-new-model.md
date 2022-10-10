---
name: Submit new model
about: Form to submit a new model to the leaderboard
title: ''
labels: new submission
assignees: ''

---

## New model submission template

**Model name:** <please write here your model name; if you don't have a name, use the underlying models used; e.g.: BERT + MLP, or ELECTRA Ensemble, etc.>

**Task(s):** <please write here the task your model performs; e.g.: Authorship Verification, Authorship Identification, etc.>
 
**Dataset(s):** <please write here all datasets your model trains on; >

**External training data:** <write Yes if you used external training data, meaning *any* other data besides the dataset itself, otherwise write No>

**Model release date:** <the month and year you released/created the model; e.g. November 2022, or 2022-11>

**[Optional] Model size:** <number of parameters your model has, in millions>

**[Optional] Paper title:** <if you have a paper published, please input name here>

**[Optional] Paper link:** <input URL here; e.g. link to arxiv.org paper>

**[Optional] Source code:** <input link to Github or other code repository here>

### Results:

Please list one per line your model metrics/results, like: ``[Dataset], [Metric], [Value]``. For example, if you have an
authorship verification model with F1, Precision and Recall, you would write:
```
DarkReddit+ AV, F1, 91.50
DarkReddit+ AV, Precision, 92.00
DarkReddit+ AV, Recall, 91.00
```

#### Other info:

Please write here any other information you deem neccessary about your submission (e.g. system uses prompt engineering, two-step model).
