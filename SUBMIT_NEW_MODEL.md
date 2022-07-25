# Guide on how to submit a new model

**To submit a new result, click [here](https://github.com/veridark/veridark.github.io/issues). Create a new issue and click on the ``Get started`` button to the right of the ``Submit new model`` template. Please fill in the information requested in the template.**

Let’s assume you want to submit an Authorship Verification model; after starting a new model issue template, you’ll 
have to fill in a number of fields:

* ``Model name`` 
 Please write here your model name. If it doensn’t have a particular name, please write write the underlying models/methods used. For example, if your Authorship Verification model is based on a siamese BERT, you could write it as ``Siamese BERT``. Or if it is an ensemble of RNNs, write ``RNN Ensemble``, etc.

* ``Task(s)`` Please write here the task that your model participates in. For example, you would write here ``Author Verification``

* ``Dataset(s)`` P Please write here the datasets your model trains/runs on. For example ``DarkReddit+``. Please list here **all** the datasets you have run your model on.

* ``External training data`` Yes/No if your model was trained on external data (data that is not in the provided datasets). Large pretrained models (such as BERT) do not count as external training data.

* ``Model size`` _[Optional]_ Please write here the number of parameters in millions. Eg, if you used a BERT-base, you’d probably write ``110M``</code>.

*  ``Paper title`` _[Optional]_ If you have a published paper, list name here.

* ``Paper link`` _[Optional]_ input URL here; e.g. link to arxiv.org paper

* ``Source code`` _[Optional]_ input link to Github or other code repository here

* ``Results``: Please list your model's metrics/results, one per line, like: ``[Dataset], [Metric], [Value]``. 

#### Example submission:


```
Model name: siamese BERT
Task(s): Authorship Verification
Dataset(s): DarkReddit+
External training data: No
Model size: 110M
Paper title: (no paper yet)
Paper link: -
Source code: TODO

Results: 
DarkReddit+, overall, 91.50
```


### Other considerations:

Send us any modifications that appear to a submission (for instance paper was published to a conference, new code is available etc.), by reopening the issue and providing the additional information.
