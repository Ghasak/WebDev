# JavaScript Considerations

## Content

----------

There are several options to create a dashboard for data modeling and other consideration.

### Python Framework

- Integrate the `JS` with `Python` we can use:
  - Django
  - Flask (You will need `jinja` to talk to the `HTML` and also `flask-sqlalchemy` for managing the database)
  - FastAPI

- Integrate `Dash` from `plotly` and use `style.css` for better layout. Also you will need to use `jinja` engine integration with `JS` in the `index.html` file.
- Use native plotting library like `ChartJS` or `FastJS` and integrate all the figures data using python backend jason file sharing data.
