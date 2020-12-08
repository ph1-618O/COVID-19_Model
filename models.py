def create_classes(db):
    class covid(db.Model):
        __tablename__ = 'covid_data'

        date = db.column(db.date, primary_key=True)
        county/city = db.column(db.string(50))
        state= db.column(db.string(50))
        state_abbrv= db.column(db.string(2))
        case= db.column(db.Integer)
        deaths = db.Column(db.Integer)

        def __repr__(self):
            return '<covid %r>' % (self.name)
    return covid