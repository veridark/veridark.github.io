import React from 'react';
import { Collapse } from 'react-collapse';
import data from './homepage.json';
import './Tasks.scss';
import UrlBuilder from './UrlBuilder.js';
import bannerLogo from '../assets/logo-banner.png';

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.urlBuilder = new UrlBuilder();
    this.state = {
      activeArea: null,
    };
  }

  updateactiveArea(name) {
    const { activeArea } = this.state;
    this.setState({
      activeArea: name !== activeArea ? name : null,
    });
  }

  // renderDataset(dataset) {
  //   return (
  //     <tr key={dataset.dataset}>
  //       <td>{dataset.dataset}</td>
  //       <td>{dataset.submission_count}</td>
  //     </tr>
  //   );
  // }

  renderTaskSubmissions(task) {
    if (!task.summary) {
      return <span>No submissions</span>;
    }
    const { summary } = task;
    return (
      <table>
        <tbody>
          <tr>
            <td>{summary.dataset_count}</td>
            <td>{summary.dataset_count === 1 ? 'dataset' : 'datasets'}</td>
          </tr>
          <tr>
            <td>{summary.submission_count}</td>
            <td>{summary.submission_count === 1 ? 'submission' : 'submissions'}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  renderAreaTask(task) {
    return (
      <a href={this.urlBuilder.buildTaskUrl(task)} className="task-tile-link">
        <div className="task-tile" key={task.name}>
          <h5>{task.name}</h5>
          <div className="task-data">{this.renderTaskSubmissions(task)}</div>
        </div>
      </a>
    );
  }

  renderArea(area) {
    const { activeArea } = this.state;
    const { tasks, name, remarks } = area;

    const isTileOpened = activeArea === name;

    return (
      <div key={area.name} className="tile-wrapper">
        <div onClick={() => this.updateactiveArea(name)} className="collapse-trigger">
          <header>
            <h4>{area.name}</h4>
            {remarks && <p className="area-remarks">{area.remarks}</p>}
          </header>
        </div>
        <Collapse isOpened={isTileOpened}>
          <div className="task-wrapper">
            {tasks.map((currentTask) => this.renderAreaTask(currentTask))}
            <div className="clear" />
          </div>
        </Collapse>
      </div>
    );
  }

  render() {
    const { areas } = data;
    if (!this.state.activeArea) {
      const defaultArea = areas[0];
      this.setState({ activeArea: defaultArea.name });
    }
    return (
      <>
        <div className="banner">
          <div className="logo">
            <img src={bannerLogo} alt="VeriDark benchmark" />
          </div>
          <div className="intro">
            <p>
              VeriDark (Authorship <b>Veri</b>fication in the <b>Dark</b>Net) is a benchmark for evaluating authorship
              analysis methods in a cybersecurity context, by introducing datasets gathered from the DarkNet marketplace
              forums or from Darknet-related discussions on Reddit.
            </p>
            <p>
              This benchmark contains three datasets for <em>authorship verification</em> and one dataset for
              <em>authorship identification</em>.
            </p>
          </div>
        </div>
        {areas.map((area) => this.renderArea(area))}
      </>
    );
  }
}

export default Tasks;
